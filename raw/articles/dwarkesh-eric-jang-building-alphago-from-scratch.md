# Eric Jang – Building AlphaGo from scratch
**Source:** https://www.dwarkesh.com/p/eric-jang
**Date:** 2026-05-15
**Author:** Dwarkesh Patel
**Score:** TBD | **Concepts:** TBD
**Scoring reason:** Bridged from take_engine (no takes generated yet; pending next pipeline run).

Playback speed
×
Share post
Share post at current time
Share from 0:00
0:00
/
Transcript
67
4
4
Eric Jang – Building AlphaGo from scratch
AlphaGo is still the cleanest worked example of the primitives of intelligence: search, learning from experience, and self-play.
Dwarkesh Patel
May 15, 2026
67
4
4
Share
Transcript
Eric Jang
walks through how to build AlphaGo from scratch, but with modern AI tools.
Sometimes you understand the future better by stepping backward. AlphaGo is still the cleanest worked example of the primitives of intelligence: search, learning from experience, and self-play. You have to go back to 2017 to get insight into how the more general AIs of the future might learn.
Once he explained how AlphaGo works, it gave us the context to have a discussion about how RL works in LLMs and how it could work better – naive policy gradient RL has to figure out which of the 100k+ tokens in your trajectory actually got you the right answer, while AlphaGo’s MCTS suggests a strictly better action every single move, giving you a training target that sidesteps the credit assignment problem. The way humans learn is surely closer to the second.
Eric also kickstarted an Autoresearch loop on his project. And it was very interesting to discuss which parts of AI research LLMs can already automate pretty well (implementing and running experiments, optimizing hyperparameters) and which they still struggle with (choosing the right question to investigate next, escaping research dead ends). Informative to all the recent discussion about when we should expect an intelligence explosion, and what it would look like from the inside.
Watch this one on
YouTube
so you can see the chalkboard.
And check out the
flashcards
I wrote to retain the insights.
Sponsors
Cursor
‘s agent SDK let me build a pipeline to generate flashcards for this episode. For each card, I had an agent read the transcript, ingest blackboard screenshots, generate an SVG visual, and run everything through a critic. A durable agent is much better at this kind of work than a chain of LLM calls, and Cursor’s SDK made it easy. Check out the cards at
flashcards.dwarkesh.com
and get started with the SDK at
cursor.com/dwarkesh
Jane Street
gave me a real deep-dive tour of one of their datacenters. I got to ask a bunch of questions to Ron Minsky, who co-leads Jane Street’s tech group, and Dan Pontecorvo, who runs Jane Street’s physical engineering team. They were willing to literally pull up the floorboards and take out racks to explain how everything works. Check out the full tour at
janestreet.com/dwarkesh
Timestamps
(00:00:00) – Basics of Go
(00:08:17) – Monte Carlo Tree Search
(00:32:04) – What the neural network does
(01:00:33) – Self-play
(01:25:38) – Alternative RL approaches
(01:45:47) – Why doesn’t MCTS work for LLMs
(02:01:09) – Off-policy training
(02:12:02) – RL is even more information inefficient than you thought
(02:22:16) – Automated AI researchers
Transcript
00:00:00 – Basics of Go
Dwarkesh Patel
Today, I’m here with
Eric Jang
, who was most recently vice president of AI at
1X Technologies
, and before that, senior research scientist at what is now
Google DeepMind Robotics
. You’ve been on sabbatical for the last few months. One of the things you’ve been doing is rebuilding, improving, and hacking on
AlphaGo
.
Today, you’re going to explain
building AlphaGo from scratch
and what it tells us about the future of AI research and development. Before we get to that, why is AlphaGo interesting? Why is this the project you decided to do on sabbatical rather than just hanging out at the beach?
Eric Jang
I like making things, and AlphaGo and
Go
AI is one of those things that really got me into the field. When I saw the early breakthroughs on AlphaGo in 2014, 2015, 2016 and so forth, it was profound to see how smart AI systems could become and the computational complexity class they could tackle with
deep learning
. This is a problem that has long been understood to be intractable for
search
, and yet it was solved through deep learning. That was quite mysterious to me, and I’ve always wanted to understand that phenomenon a little better.
My training is in deep
neural nets
for robotics, where the decisions made by the neural networks are a bit more intuitive. But AlphaGo is a problem where the decisions are the result of a very, very deep search. It’s always been very mysterious to me how a ten-layer network can amortize the simulation of something so deep in the
game tree
.
Eric Jang
If you plot out how much compute it took to build various iterations of strong Go bots over the years, you can see that in 2020 there was an open-source project called
KataGo
by
David Wu
from
Jane Street
, which achieved a 40x reduction in the compute needed to train a really strong Go bot tabula rasa. I’m not certain if it’s stronger than
AlphaGo Zero
,
AlphaZero
, or
MuZero
, but it’s very strong, and this is what most Go practitioners today train against when they’re playing an AI.
Thanks to LLM coding, what took a whole team of research scientists at
DeepMind
and millions of dollars of research and compute can now be done for a few thousand dollars of rented compute.
Dwarkesh Patel
We should first discuss how Go works. How does the game work?
Eric Jang
Go is a very simple game that can be implemented quickly and easily on a computer. The objective is to put down black and white stones and try to occupy as much territory as possible. I might start by putting down a black stone. Black always goes first. Go ahead. The way you capture an opponent’s stones is that for every intersection, if you can surround all four of its neighbors with your stones, then it’s cut off from oxygen, if you will, and it’s a dead stone. Now I control these four stones as well as this empty intersection here.
There are slight variations between
Chinese
,
Japanese
, and what are called
Tromp-Taylor rules
. Tromp-Taylor rules are designed to be completely unambiguous, so this is what all Go AIs train and resolve against. In typical Go, when humans play, you’re actually not allowed to put this white stone down here. It would be instant suicide. In Tromp-Taylor, it’s actually fine. You put it down, and it immediately resolves to death, so the outcome is the same.
Let’s start over and play a few stones, and then I’ll explain some more. I’ll just start there.
Dwarkesh Patel
I’m basically playing randomly here, but I’m trying to get around your stones and see if I can surround them.
Eric Jang
This move exposes one empty neighbor for your white stone. It’s akin to a check in chess. If you don’t respond immediately by putting one here, then I can immediately capture this.
Dwarkesh Patel
I see. Because it’s the diagonals that determine whether you’re surrounded or not.
Eric Jang
The cross-section, not the diagonals. This one is surrounded on three sides, so you’re at threat of losing that stone if you don’t play one immediately there.
Now you can see that I’m starting to pressure you, because by putting a stone here, you’re forced to put one here.
Dwarkesh Patel
Otherwise, you would have this two-block to yourself.
Eric Jang
Yes. And if you think through what happens if you were to respond here, you can probably search into the future and deduce what I’ll do in response once you do that.
Dwarkesh Patel
You have a lot of confidence in my abilities, but I’m guessing you’d put the black here.
Eric Jang
That’s right, and then I would capture all three of these stones.
Dwarkesh Patel
So I should just assume that this little block is gone.
Eric Jang
Yes. In Go, it’s actually okay to let an opponent capture some stones if, for example, it lets you position to capture more stones somewhere else on the board. This is what makes Go a beautiful game: you can lose the battle but win the war. As the board size increases, the complexity of these micro versus macro dynamics gets more interesting.
Dwarkesh Patel
Presumably you’d put one here.
Eric Jang
So now I would capture this entire group, and this would be mine.
There’s one more case I want to demonstrate, which I actually had a bug in my code for recently. Let’s consider a formation like this, with other pieces on the board in play. Let’s talk about how the game ends. In this territory, who controls these areas? Is it white or black?
Dwarkesh Patel
White.
Eric Jang
It’s actually black, because I’ve surrounded this whole area. Assuming I have other black stones here, it’s very hard for you to break this out of the control of these stones.
Dwarkesh Patel
And when the final score is tallied, would these ones also count as being in...
Eric Jang
Great question. This is where different rule sets have different ways of scoring. We should talk about how you resolve scores between humans and how you resolve scores in computer Go, because there’s some ambiguity in how humans evaluate this.
Most humans would look at this board configuration and conclude that black has totally surrounded white, and white has no chance of life. We could play out more here, but at the end I would capture everything. However, if you have a way of breaking this formation and connecting white to something outside of it, then it can flip. This is where it’s a little bit hard for a computer to decide these kinds of things.
How do humans do it? It’s worth thinking about how humans resolve this, because this will map later to how we think about the deep neural network. Humans basically say, “I think the game is done,” and then you have to also say, “I think the game is done.” Then we’ll say, “I think these are my stones,” and you have to agree. If you don’t agree, we keep playing.
Essentially, once two humans—their so-called
value function
—agree on a consensus, then the Chinese rules resolve that. In Tromp-Taylor scoring, it’s perfectly unambiguous, so it can be decided algorithmically by a computer. If you have this at the endgame, the way you score it is that you first count how many stones you control, and that’s unambiguous.
Then you count how many empty intersections are not touched by your opponent’s stones. These intersections would not count for either player, because all of these intersections are connected to both white stones and black stones.
If this were like this, then white would get three points. This is a little odd because a human would know that white is actually losing these points. But Tromp-Taylor scoring would consider white to have all of these points as well as these points. So that is a very big difference in how computer Go scores things and how humans score things.
Dwarkesh Patel
How does the game end?
Eric Jang
The game ends when either a player chooses to resign or both players pass consecutively. Those are the rules.
Dwarkesh Patel
Now help me crack this with AI.
00:08:17 – Monte Carlo Tree Search
Dwarkesh Patel
Let’s understand how AlphaGo actually works and how somebody in the audience might be able to implement it.
Eric Jang
Let’s start with an intuition about the underlying search process used to make moves, and we’ll layer on ideas from deep learning to make it much more efficient and tractable.
Go is a game with just two players. We’re going to draw a person here, and we’re going to draw an AI here. Let’s say this person is playing black, so they go first. They go here. Now the AI is going to make a move based on what it sees here. There’s a question of how you encode these inputs into the AI. Maybe you could use ones and zeros, but you want to represent black, white, and empty. You would need at least three different values. Maybe you could use zeros, ones, and twos. The AI might see something like zero, zero, zero, zero, one. This is the input to the AI on its turn.
The AI can choose. Let’s just pick three possible random moves it can make, and I just drew these at random. Which move is best here? Well, we don’t know until the game ends. Go doesn’t have any kind of local reward for which move here is good. This is what makes Go a very difficult game. You don’t actually know who won until you really get to the end.
How deep is this tree? On a 19x19 Go board, there are roughly on the order of 361 moves on any given move, and of course, as it fills up, you have fewer moves. The number of steps in the game can be somewhere from 250 to 300 moves. Experts might decide to end the game well before that, but under Tromp-Taylor scoring, you actually have to play things all the way to the end. So this could be 300 moves, a depth of 300 in the tree.
If you keep on expanding possible moves—here the AI goes, then here the human would go, and so forth—you find that you end up with an enormous explosion in the possible game outcomes originating from just this one state. This is something on the order of 361
300
, which is far more than the number of atoms in the universe. Of course, there are redundancies and symmetries, so it’s not actually that, but if you were to do a naive tree with no merging of children, you end up with a tree about this big.
Dwarkesh Patel
What do you mean by “merging of children”?
Eric Jang
Let me use this board here. If we start here, and then you play here, and then I play here, and then you play here, that’s equivalent to me starting here, you playing here, me playing here, and then you playing here. Both arrived at the same spot, but through different paths. So this child node can be thought of as a shared ancestor.
Dwarkesh Patel
Got it. And I guess it starts at 361 but it decreases by one each time.
Eric Jang
Yes, the branching factor decreases by one each time. In any case, this is a very large tree. This is also why computer scientists for many years thought that Go was not a tractable problem this century. The amount of compute you would need to exhaustively search every possibility is just too large.
If you could, Go is actually a deterministic game. In any given state, you can compute the best possible strategy you can make in order to win the game. You can search all the possible futures where you win, and then just make sure you always stay in that set of futures.
AlphaGo’s core conceptual breakthrough was using neural nets to make this search problem tractable. Before we get into how neural networks are involved, let’s talk about how we can, assuming we had a powerful enough computer, search this tree to find the best move.
In the beginning, you’re not going to build out the whole tree, because storing it would be very expensive. Instead, you might interactively figure out which leaves of this tree are worthy of exploring and expanding into the future to see what else is there. There are some early algorithms in the
bandit literature
like
UCB1
, which is not exactly appropriate for a sequential game like Go, but very much inspired the action selection algorithm used in AlphaGo. UCB1 looks like: on every move, we’re going to take the best action—the
argmax
over
a
that maximizes
Q
of
a
, and I’ll explain what
Q
of
a
is in a moment—plus some sort of exploration bonus.
On every node, we’re going to track a few quantities. Let’s consider each of these a node. This is the root node where you’re making decisions from, and these are the children of the root node. Each node is basically a data structure that stores a visit count of this child node.
Dwarkesh Patel
How often the parent visited this node.
Eric Jang
Yes. One thing that’s easy to trip on if you come from robotics or other kinds of reinforcement learning is, where are the actions? I’m only talking about nodes. Nodes here represent states, and because this is a perfectly deterministic game with no randomness, you actually can just infer the action based on the child. If I go here, that implies an action, and this is the state we resolve to.
If you ask LLMs to vibe-code an
MCTS
implementation, they will most likely design the right data structure here. But it’s sort of a chef’s choice. You can rewrite the tree structure however you like. This is what Claude 4.6 wrote for me when I asked it, and it was a very reasonable choice.
Q
a
represents the mean action value of this action. I’ll use a subscript
a
to denote that this corresponds to taking a specific action to get here from the root node. Taking
a
gets us to this node here. We’re also going to store the probability of taking this action
Dwarkesh Patel
Again, from the parent?
Eric Jang
From the parent, yes. What are the odds that we sample this one? This will become relevant later. We’ve talked about a deterministic tree for now, so I’ll bring probabilities into this later.
Finally, we have a dictionary of children, which is just more of these nodes in a classic
linked list
-style reference
tree
. This is the basic data structure to implement a tree.
In AlphaGo, they use a slightly different action-selection criterion called
PUCT
, short for Predicted Upper Confidence with Trees. When you select which child to take, you do argmax
a
of
Q
(
s
,
a
) plus a constant. The equation forms are pretty similar. These are both scoring criteria. You want to argmax this quantity and you want to argmax this quantity to determine which action to take.
Let’s break down the intuition of how you select actions here.
Q
(
s
,
a
) is the mean action value, so how good a given child is on average. If you actually knew the whole tree, this is all you need to select the best action. You don’t really need to do more than that. But if you’re interactively building this tree as you’re figuring out what the
Q
values should be, then occasionally you have to try some other actions as an
explore-versus-exploit trade-off
.
In both UCB and PUCT, there’s this term that basically rewards taking actions you haven’t taken before. As we mentioned, each node stores the visit count of taking that specific action. Everything is initialized to zero. For a given action, let’s call it action
a
, initially it’s zero. As
n
is increasing, if we’ve already made 10 action selections from that root node but we haven’t picked
a
yet, then this term starts to become quite large for
a
. Conversely, if we’ve chosen
a
10 times out of 10, then this term is quite small. It diminishes very quickly. The same thing is true here.
Dwarkesh Patel
Just to make sure I’m understanding, let me put it in my own words. Let’s focus on UCB. Conceptually, you can think of it as two different things: the
Q
and the exploration term.
Let’s be clear about what
Q
is.
Q
is basically saying, once we do these rollouts—you’re actually running all these simulations—you go down the tree and figure out: if I end up at the terminal value of this tree, do I win this game or not? You average whether I win or not across all the leaves of this tree starting from this node. That average, you put in
Q
. So
Q
represents the probability that I’ll win this game starting at this node. That is your sort of exploit. It’s saying: I’ve run these simulations, and I think this is a good move or not.
The other term is saying: have I explored this branch enough yet relative to the other actions I could be exploring, or have already explored? If I haven’t explored this branch yet, maybe I think it has a low score, but I just haven’t explored that many leaves down this node in this tree. So I should try this even though
Q
, the exploit term, is telling me it’s not that valuable.
Because ln(
n
) grows slower than
n
, over time you will move from the argmax being dominated by the exploration term, which is the second term here, to the argmax being dominated by the
Q
term, which is when you’ve done enough simulations and are confident that this is the branch to go down.
Eric Jang
Yes, that’s right. The motivation for UCB was to come up with an algorithm where, if you don’t know the payoff of the different actions you can select, this strategy, given some exploration term here, bounds your regret in terms of how wrong you can possibly be.
I don’t know the proof. I also don’t know if this one is proved to have logarithmically or square-root-bounded regret, but I think the algorithm was derived to look something like this. You can tell these terms grow a little differently, and this is to account for the fact that Go has many more actions for any given move compared to your standard bandit problem.
One small clarification: you talked about simulations and probabilities. We should remember that Go fundamentally is a deterministic game. Where does the notion of probability come from here? If you had a very powerful computer, there are no probabilities. You can just compute the true average of the mean action value.
So where does the probability come in? In computer Go before AlphaGo, we’ve always done some sort of
Monte Carlo method
where we take the expected
Q
value averaged over a randomly selected tree. That randomly selected tree is where probabilities come in. The interpretation of
Q
is: what is the expected action value under the random distribution induced by some random search process?
Where does the random search process come in? That’s where
P
a
, of action, comes in. If we assume a naive algorithm where you have a uniform probability of taking any valid action, then this would just be one over the number of valid moves. You would be taking this average over a very diffuse tree. This is a valid integral, but it’s very slow because you’re going to consider a lot of trees that have very low value. It’s essentially almost like an
importance sampling
problem. Only a few actions and paths contribute high value, and almost everything else is low value. So that’s a tricky problem here.
This is the action selection criterion for how you decide which moves to go down. As you move down in tree search, you will eventually run into a node where it’s quite clear you’ve won or lost. At the very end of the game, when there are no valid moves left to play under Tromp-Taylor scoring, you can decide whether you won or lost. This is the final return of the whole game.
We can assign a value,
U
, to a terminal leaf node of the tree, but how do we assign values to the nodes prior to that, the parents? You take the mean action value, which is essentially your average. Suppose these were all leaf nodes. The mean action value of this node is just the average of whether you won or lost at the leaf nodes. Correspondingly, you can walk up the chain and say the mean action value of this node—let’s call it
Q
b
—is just a weighted average of these ones here.
The weighted average could depend on whether you have a different sampling distribution. But the basic intuition is that you want to resolve the game where you have a deterministic win or lose, and then you can go backwards—this is called the backup step—and assign values to these nodes or actions corresponding to the average over the final terminal leaf.
If you were to do this without neural networks, it would still be intractable. You would have trouble finding which actions to sample. A lot of the actions would contribute very low value, especially if you’re trying to fight your way out of a losing position. Only a few actions give you high value, so the search in practice is still very expensive. But the idea is that because Go follows a tree structure, you can inform a very good estimate of the value of this node based on the downstream values, assuming they’re all correct and you’ve searched deep enough.
Dwarkesh Patel
Your earlier explanation—about the sorts of states where it’s obvious to a human who’s going to win, but deterministically you still have to play it out—actually drew upon the intuition for why 1) the value function is both trainable and 2) necessary in order to learn this game effectively. Maybe it’s worth defining value in the first place.
Eric Jang
We talked about
U
being your final resolution of whether you won or lost. This is a terminal leaf node condition. Humans don’t play all the way to the leaves of the tree. They stop dozens of moves before, maybe even 100 moves before in high-level play.
How do they know? You can think about humans as implicitly having a neural network called a value function that takes in a board state and evaluates
p
(win). The human glances at the board and knows, “I’m probably going to lose.” They’re essentially running a neural network that looks at a board and implicitly amortizes a huge number of possible game playouts. They take that average and decide whether the board is winnable or not, and whether they should concede or keep playing.
This is remarkable. If you think about the beauty of something like this, a neural network in a human can somehow do all of this simulation at a glance. They just know within a few seconds, without actually playing every single game logically, based on crystallized knowledge and experience. They can do this. This gives us a hint that in games like Go, there are ways to radically speed up the search process. This is one of the fundamental intuitions behind why AlphaGo works. You can train a value function to look at a board and quickly resolve the game without playing out all of these trees to a very deep search depth.
Dwarkesh Patel
Makes sense. I will say for the audience, for previous episodes when I was prepping and it seemed relevant to understand how AlphaGo works, I would find it very confusing. But it’s the kind of thing where once you understand the problem in this way and then build the next few pieces, it is actually a lot more understandable and it makes a lot of sense. It’s okay to be confused right now, but it’s probably simpler to understand, by the end of this lecture, than you anticipate. I’ll just make that note for the audience.
Eric Jang
The important intuition at a high level—to step back about where we’re going with all this—is that classically, for games like Go, you could build a tree, but we don’t have computers powerful enough for that. Estimating the value of every action you could possibly take is also hard because you don’t know until the end of the game.
You could take averages by playing them to the end, but that’s also hard because you don’t know which actions to take to sample these averages. Conceptually, there are two problems: the breadth of the tree and the depth of the tree. AlphaGo gives us a way to shrink both of those to be tractable. That’s essentially the core idea behind it.
We take the idea that humans can glance at a board and instantly predict whether we win. That maybe gives us the opportunity to truncate how deep we search. We also know that humans can intuitively, at a glance, decide what moves might be good on a Go board. These are two things we can use deep neural networks for, to accelerate the search process.
Before we talk about neural nets, let’s go back to how this playout works. We’ve only talked about making one move. The AI looks at this encoded Go board. It has a tree. It searches deeply into the tree to find out which of its actions might be the best, takes that action, and goes back to the human. Now the human sees a Go board that looks like this, and they make their move. Maybe they put their stone here.
Now we go back to the AI, which now looks at a new encoded board. I’ve used 2 to denote the AI playing as white, 1 to denote the human playing as black, and 0 as empty. On the AI’s turn, it does the MCTS tree search all over again from scratch. It throws away the old tree that it searched last round. Now there’s a new root node and it begins to search anew.
You can basically think about MCTS as a search algorithm that decides which moves to play best, aided by neural networks, and it’s done on every move. Let’s talk about the neural network part of this.
Dwarkesh Patel
While you’re erasing, another thing that was important for me to understand was about the MCTS data structure with nodes and children of nodes. This is done per move and reinstantiated once a move is made. A human makes a move, then the AI looks at this and runs a bunch of simulations to figure out what move to make next.
A simulation is exploring one more node in the MCTS tree. Once you run 1,000 simulations, that informs the probability of what move to make next, as you’ll explain. That’s what you store. You choose the best move given those probabilities. You discard all of that, the next player makes a move, and you restart this process at the beginning of every move.
Eric Jang
Correct. One small addendum: you don’t discard all of that. You keep one thing behind that we’ll use later.
00:32:04 – What the neural network does
Eric Jang
Now that we have a basic intuition of how moves are made with search, we’re going to talk about how neural networks can speed this up by providing an analog to human intuition. There are two networks. There is the value network, which takes in a state and predicts, am I going to win or lose? It’s a binary classification problem. Then we have a policy network, which induces a distribution over good actions to take.
I’m going to draw a one-dimensional flattened move distribution, but this is really a square grid. These are the probability distributions over good actions. Both of these are categorical classification problems. You can train this like any classifier with deep learning,
cross-entropy
loss, that kind of stuff.
The specific architecture does not matter too much. I tried a few different architectures.
Transformers
work,
ResNets
work. For small data regimes, my experience is that ResNets still outperform transformers and give you more bang for the buck at lower budgets. But this may not always be true.
Dwarkesh Patel
Wait, why is that?
Eric Jang
They provide the inductive bias of local convolutions. Generally, transformers start to outperform
residual convolutional networks
when you want more global context.
One interesting finding from the
KataGo paper
was that they found it quite useful to pool together and aggregate global features throughout the network, to give the network a global sense of how to connect value from one side of the board to the other.
Dwarkesh Patel
What does it mean to aggregate global features?
Eric Jang
If you have a very large 19x19 Go board, and you’ve got some battles going on here and some battles going on there, when you pass this through a
convolutional neural network
, the receptive fields are going to be good at computing local things and making that invariant. But they won’t be able to connect these two features easily. They need to be pooled together and attend to each other somehow.
The argument for why transformers are good for
computer vision
tasks—
vision transformers
and so forth—is that because they have global attention across the whole thing, they can more easily draw these connections. But you do need more data there so that you can learn the invariant local features through data.
I’ve tried very hard to make transformers work for this problem because I was curious if transformers would present some sort of breakthrough in Go and just remove a lot of those tricks. But try as I might, I haven’t figured out a way to make transformers better than ResNets for now.
Dwarkesh Patel
One more tangential question. It makes sense why transformers, with their global pooling of information, would be better if you need to consider information that is not just spatially… CNNs give you a bias that the things next to you are especially relevant.
Eric Jang
And then they’re aggregated up slowly.
Dwarkesh Patel
For games where it isn’t that relevant what is happening locally—you just have to consider the whole thing—you’re saying transformers would work better. We’re talking about the spatial dimension. How about the temporal dimension? Right now we’re only considering the previous move because it is a deterministic full-information game.
What if it were something like poker or
Diplomacy
, where a bluff they made a while back is relevant to understanding now? And to decide your next move, you need to consider all those previous states. Would that change the consideration of what inductive bias and which architecture is most relevant?
Eric Jang
Great question. Go is a
perfect information
game. In perfect information games, there does exist a
Nash equilibrium
strategy for which you can do no worse than any other strategy.
If you know your opponent has a particular bias, like they love to play aggressively, you can in principle counter that specific strategy better than a Nash equilibrium policy. But to counter any given strategy, there exists a single Nash equilibrium that can be decided solely using the current state. That is a design choice AlphaGo made, which in hindsight turned out to work very well because the Nash equilibrium seems to be superhuman. No human strategy seems to be able to beat it.
There are variations of this where you would need to consider temporal history. This is a very exciting research area, and I’d encourage people to fork
my repo
and try it out. If you were to play 2v2 Go, you actually need to model your partner’s behavior. You may not have information on how they play, so you need to aggregate information on how they play so you can respond accordingly. These are situations where it’s no longer a perfect information game. In games of imperfect information or partial observability, you do need context to build a model. That’s a place where things can get very exciting in terms of
self-play
or Diplomacy-style games.
Returning to the neural network, the architecture again is not super important. You can get it to work with transformers. You can get it to work with ResNets. I found that for low-budget experiments, ResNets work a little better. You can also use
Karpathy
-style
AutoResearch
hyperparameter
tuning to make your architecture pretty good. You don’t have to worry too much about that. You just need to set up the problem so that you have a target optimization.
We’re going to pick a somewhat arbitrary architecture that worked for what I did. But again, this part is not super important. You have your encoded board state and, similar to an RGB, we’re going to have three channels. One channel to encode black, one to encode white, and one to encode empties or a masked region if you want to train on multiple board sizes. I’m actually not going to talk about multiple board sizes for now. That’s a bit too complicated.
We have this two- or three-channel RGB-like image, and we feed it into a ResNet. Then we have two branching heads. One head predicts the value function, which is a single
logit
, let’s just call it R
1
. Then we have the policy, which is R
361
. This is the architecture. We’re going to train this to predict the outcomes of games given the board state, and we’re also going to train it to predict what are good moves.
The
original AlphaGo paper
, called AlphaGo Lee, initialized this network with a
supervised learning
dataset of expert human play. Later, they removed this restriction by having the model teach itself how to play well. I find it super nice for implementation, for your audience, to always initialize your experiments to something easy and get the problem working before trying to bite off the whole thing and learn tabula rasa.
In deep learning, initialization is everything. You always want to initialize your research project to something as close to success as possible, especially if you’re doing something new that you haven’t done before. Always pick something that works and then get it to do something better, rather than start from something that doesn’t work at all and try to make it work.
Under that philosophy, it’s a great idea to start with something that has a good initialization. We’re going to take human expert plays and train this model to predict good actions. We’re going to take all the moves in which an expert won and predict those actions. Regardless of board state, whether you won or lost, you’re going to predict the outcome.
You might be wondering, for some of the early boards where only one stone has been put down, how could you possibly know who the winner of this game is? Well, if you have hundreds of thousands of games, on average you’ll probably see that boards starting like this have half of the games branch off and win, and half branch off and lose. So that’ll actually be fine. When you train this model to predict those outcomes, the logit will sort of converge to 0.5. For these things, it’s expected that once you train the model, a starting board state will look like 0.5, and then as you progress towards the end of the game, the win probability will either go up or down.
This is your move number. As you get hundreds of steps into the game, it becomes much clearer who’s more likely to win or lose under your expert data distribution.
Dwarkesh Patel
I didn’t understand the significance of why this way of thinking about value is especially relevant to the expert data.
Eric Jang
It is not relevant to the expert data. It’s true for any data that you trained it on. If you were to learn tabula rasa, you would also expect this to fall out.
Imagine you’re vibe coding AlphaGo. You gather some expert datasets from KataGo online, or you have a dataset of human players, and you train this model. It turns out this model is already a pretty good Go player. It will most likely beat most human players. If you just take this policy recommendation and take the argmax over these probabilities—if you take the argmax and just take this action as your Go play—it’ll be a very fast Go player that doesn’t think in terms of reasoning steps. It just shoots from the hip, and it’ll be a very strong Go player. This is already quite miraculous if you think about how ten neural network layers, maybe under 3 million parameters, can already do something that impressive.
You can start this way. It’s important when implementing this to verify that this is probably true. It’s good to verify that your Go rules are implemented correctly and that you can run these simulations relatively quickly. Just as a checkpoint, you want to make sure you can actually do this basic step before you try to layer on more complex things like search.
But we can do a lot better than taking the raw neural network and playing the moves. So let’s apply the neural network to improve Monte Carlo tree search. We start with our root node, and we now have a four-step iterative process to do MCTS.
This tripped me up when I was first reading the paper and trying to understand it. Essentially what we’re going to do is choose a number of simulations, and this number varies. It can be somewhere between 200 and 2,048. I believe in the
AlphaGo vs. Lee match
, they used tens of thousands of simulations per move because they really wanted to boost the strength of the model as much as possible. But in training, you don’t actually need too many. KataGo, I think, uses something in this order as well.
Dwarkesh Patel
Do you know if they used… If you watch the
documentary
, they had a laptop out during the game. They didn’t use the laptop itself. It was on some—
Eric Jang
It was on some
TPU
pod, I think.
Dwarkesh Patel
Honestly, kind of unfair.
Lee
is not using 1E22
FLOPS
to do a move.
Eric Jang
Fair enough. Interestingly, modern Go bots don’t need that much compute at test time. What we’ll find out, as we talk about how the MCTS policy improvement works, is that over time the raw network actually takes all of the burden of that big TPU pod and just pushes it into the network. You can do all of that work with one neural network
forward pass
. The TPU pod will always add the extra oomph on top, and that’s what they wanted for the match.
We’re going to pick this number of simulations thing, and for every simulation, we’re going to do several things simultaneously. We’re going to see which moves are the best in the current tree. We’re going to add extra leaves to the tree if we get to a point where we need to add a leaf, and we’re going to update the action values for the tree. Every simulation involves this four-step process: selection, expansion, evaluation, and backup.
At the beginning of our Monte Carlo tree search, our tree is very basic. It only has the root node, or our current board that our AI wants to play at. We’re basically going to select the best action for this. When this root node is created, we also know that we can evaluate it under our neural network and get the quantities
V
θ
, as well as our probability over actions. And I’m going to say root. For all of the actions here, we can create a bunch of children. In this case, I’m drawing a 3x3 board with one missing, so there are eight possible children associated with this root node. Each of these has an associated probability of taking that action, so there’s P
8
, P
1
, ... P
2
, and so on.
So at the beginning of our Monte Carlo tree search, we have our root node, and we can initialize it with some children. The policy network evaluated on the root node gives us—on a 3x3 board with one existing stone placed—eight possible children that this AI could take. With each of the children, the policy network also gives us the probability of selecting that child. The first step is to do the selection of the tree. Again, this is a very shallow tree. All we have so far is essentially a tree of depth one.
Our first move is to select by maximizing, or argmaxing, the PUCT criterion, which is basically
Q
(
s
,
a
) + C
PUCT
x
P
a
x (√N / (1 +
N
a
)). For each of these,
N
a
is zero for all the actions initially.
N
is zero. So we’re going to pick according to this. Initially, the chosen action is most likely going to be biased towards the highest-likelihood action, because these are uniform for every node.
Let’s suppose P
1
was the highest-probability node, so you selected this one here. Now you get to this node and you realize it’s not a leaf node. It’s not a terminal game, so you cannot resolve the final resolution. The next step is expansion. You will then run this board state through the policy network. Note that this is the AI’s move. The AI is making this move. When we expand this tree, we’re now thinking about what the human, or any opponent, might do.
When we evaluate the node here, we’re going to evaluate it from the perspective of this player. This node has possible actions that we could take, and we expand the leaf nodes here. For each of these nodes that we could arrive at, we’re going to now check how good they are. From here, the human could play here, here, or here. We’re going to store
V
θ
for each of these, so
V
θ
of Node
1
’,
V
θ
of Node
1
’’, and so on. We’re basically using our neural network to make an intuitive guess of how good this board is from the perspective of this player.
Fortunately, because it’s a zero-sum game, it’s easy to deduce that the value for this player at this step is just one minus the value from the other perspective. It’s easy to flip the search process depending on which player you’re at. This is the expansion step. You’ve taken a non-leaf node, expanded it, and evaluated the value. This is essentially a quick guess as to whether I’m going to win or not if I were to play to the end. You can almost think about
V
θ
as a shortcut for searching to the end of the tree, for any given simulation.
This is essentially the evaluation step. We’re evaluating the quality of each of these boards. In the original AlphaGo Lee, they did something kind of interesting. They took this value and averaged it with the value of a real Go playout. They actually played a real game from here all the way to the end. I’m just going to draw this squiggly line to indicate some path. They play this all the way to Tromp-Taylor resolution of a full board. So this is a zero or one. They took this value and averaged it with this one here. The formula was
α
x
V
θ
of some node plus (1 -
α
) of a truly randomly sampled playout.
You might be wondering how they play this out. It would be very costly to do another search on this playout, almost like a tree within a tree. They don’t do this. Instead, they just take the policy network and play it against itself. They use it as both players, and they just play it all the way to the end. This helps ground the estimates here in reality because you can get a single-sample estimate of whether you win or not. In the endgame, where the board is almost resolved, this becomes quite useful because the play according to the policy will most likely decide a pretty reasonable guess of the game, so you’re not facing a problem where this becomes untethered from reality.
It turns out this is totally unnecessary. In all subsequent papers after AlphaGo Lee, they got rid of it. In my implementation, I did the same, and it speeds things up a lot because you don’t have to roll these games out on every single simulation.
Dwarkesh Patel
Okay, just to reinforce my own understanding and re-explain it. For the audience, by the way, in case it’s not obvious, the
P
there in the select, that is the probability coming from the network in this case.
Eric Jang
Correct. The policy network here.
Dwarkesh Patel
Fundamentally, a simulation, just think of it as rolling out one more node in the search process.
Eric Jang
Almost. A simulation is easy to think about when the whole tree already exists. You just walk down the tree using the PUCT selection criterion, and then you keep going. In AlphaGo, the data structure is such that we begin with a tree that basically only has depth one—its only children—and you want to iteratively build out the tree as you’re also selecting actions down the tree. That’s the core thing here. Because Go is such a combinatorially complex game, you cannot afford to build the tree in advance and then search it. You must search while building the tree.
Let me finish up with the last step, which is the backup. Once you’ve scored these things, the
Q
value assigned to the node here for taking this action is just the average across your evaluated values. You take a running mean over all the simulations you’ve taken, averaging the values of the children nodes. That’s the backup step, and once you evaluate this, you can recursively go back up. If you know the action value of this node, you can then take the average on its parent, and so on.
You have this four-step process: 1) You’re choosing the best action you know of so far. 2) You may run into a node you haven’t been to before, so you need to grow the tree a bit. 3) You run it through the network to guess whether you’re going to win or not. 4) You walk all the way back up to the root node to update your values on what the best moves are.
As you do this iteratively, because you’re always selecting according to this criterion, you’re always going to be selecting the best action you think at any given branch. The final visit counts of how often you chose these things will reflect your correct policy distribution as induced through this search process. The visit count we stored in the node earlier actually becomes the vote for which action we should finally select.
As a test of understanding, it’s worth thinking a little bit about whether we could make this even simpler. Could we actually maybe even get rid of this one and still make the thing work? Recall that when you do an expansion and then an evaluation at this node, you are checking the win probability of each of the child nodes. So if this one is one and these are zero, you do know something about which action might be better to take. Why would you still need this, right? Why not just normalize the values into a distribution and call that your policy distribution?
This is fine. You can do this, and it probably does work. But in practice, having a single forward pass that gives you a pretty good guess is how the breadth is pruned out. There is a duality here. It would be weird if the policy recommended an action that disagreed with the value. If a policy said this was very high probability, but this one said it was a low value, then there’s something fundamentally wrong between your policy head and your value head. They are linked, and you probably could get rid of this if you came up with a different way to recover it from just the value evaluations.
Dwarkesh Patel
Right. Just to make sure I understand, the reason you don’t do that is so you don’t have to do 360 independent forward passes to say, “Okay, here’s the value of everything. Let’s argmax over it.” Instead, you can just do one forward pass and get the probabilities of all of them.
Eric Jang
You can usually batch these somewhat efficiently, so it probably isn’t a huge computational burden in practice. But yes, you would have to pass up to 361 boards into a single mini-batch update to evaluate all the values, then normalize them.
There’s actually a more important reason why we still do this, which is how Monte Carlo tree search is used to feed back on itself and recursively improve its own predictions and search capabilities. That’s where having this as an explicit entity you’re modeling, rather than an implicit normalization over your value, is a good idea.
Dwarkesh Patel
Makes sense. Okay.
Eric Jang
We talked about the simulations. What you end up with as you roll out the number of simulations is a tree that looks like… I’m drawing a very low-dimensional version of this. Of course, in the real game, it’s much more high-dimensional. You’ll end up with a tree structure that has a lot of leaves that terminate and are not visited again because their value is deemed to be too low. But along one path, there will be a set of actions with very high visit counts that gravitate towards that one set of decisions as you increase
N
.
This is the mental picture of what the tree in Monte Carlo tree search looks like. You should contrast this with an exhaustive tree like in tic-tac-toe, where there are nine actions, then eight, then seven and six, and so it’s a nine-factorial-sized tree. The Monte Carlo tree search in Go is very sparse. It only considers the paths that you’ve expanded children nodes on.
Now that we have the search algorithm that
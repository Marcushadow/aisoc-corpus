---
title: Why you should care about PPO
description: why did ppo become the goat
author: checkpoint214159
difficulty: beginner to intermediate
category: reinforcement-learning
domains: ["reinforcement-learning", "policy-gradients"]
tags: ["trust-region", "policy-optimization", "exploration-exploitation", "actor-critic", "clipped-surrogate"]
prerequisites: ["policy-gradients", "gradient-descent"]
---

## What is Proximal about my Policy? Optimization

$$\tiny
that title makes no sense i just wanted to have a funny question in the title but also have PPO. but then i couldnt fit optimization in there so i just threw it outside of the question mark
$$

Welcome to the corpus entry for PPO! As a general rule, I will be glossing over a decent amount of foundation you typically see in many of those 'intros to RL' that you see plenty of. Those usually build up to PPO by starting with MDP/POMDP problem formulations, then going into Q tables and Q learning, then onto the RL and policy side of things. We will do no such steps here since, yknow, those already exist in other corpus entries, or if not, in all those youtube videos. 

What we will do instead, is take a deep dive into PPO, why its formulated the way it is, why it works well in industry, and what are some problems with it. Except us to snipe at other general concepts too (that may have already been described in the corpus); understanding the mechanics of PPO is nice, but zooming out is its own thing entirely.

## How did we get to Policies?

briefly touch on Q learning. then go into why its inefficient briefly. insert image of openai here. the old logo


## Proximal? 

talk about clipping?

clauded draft: 
|
v
PPO was introduced by OpenAI in 2017. The key idea is:

Policy Gradient methods update the policy by taking gradient steps in the direction that increases expected reward
The problem: If you take too large a step, you can destabilize training and diverge from good policies
The solution (Trust Region): Only allow policy updates that stay "close" or "proximal" to the old policy — don't wander too far
How PPO enforces this: Uses a clipped surrogate objective that penalizes large deviations from the old policy

The term "proximal" comes from optimization theory:

Proximal methods are optimization techniques that handle constraints by staying close to a reference point
In PPO's case, the reference point is the old policy, and "proximal" means we don't want big divergences

## Beyond Optimization: Why else is PPO good? 

talk about beyond good general performance
talk about GPU batching and many sims as compute improved
talk about downsides of the buffer of off-policy approaches

downsides: PPO doesn’t scale with number of environments
- Solution proposed by paper: SAPG: Split and Aggregate Policy Gradients. Very very interesting stuff!


## Some PPO-adjacent stuff to think about



[![JavaScript](https://img.shields.io/badge/1.5-F0DB4F?style=for-the-badge&logo=javascript&label=JavaScript&labelColor=323330)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# Nutrient paste dispenser simulator
The objective of this [web app](https://kykal.github.io/RimWorlds-Nutrient-Paste-Dispenser-Simulator/) it is to simulate the [Nutrient paste dispenser](https://rimworldwiki.com/wiki/Nutrient_paste_dispenser) from the videogame [**RimWorld**](https://store.steampowered.com/app/294100/RimWorld/). It includes all 9 possible inputs (hoppers), so you cand assign the amount of food which one will have and when you are ready to receive your nutrient paste it will serve you one. ;)
- - -
## Content
1. [How to use](#how-to-use)
2. [Nutrient paste dispenser behaviour](nutrient-paste-dispenser-behaviour)
- - -

## How to use
There are nine possible inputs where you can assign the amount of food (0 min. - 75 max.). This machine needs a minimum total of 6 units of food to serve a dish.[^1] When you are ready to receive a dish just press the button and there you have. A delicious ~~horrible~~ nutrient paste. 

[^1]: There is no need to have all 6 units of food in one hopper, you can ditribute them in all hoppers.

## Nutrient paste dispenser behaviour
When a dish is requested the machine will check all the hoppers to verify if a dish can be served, if the amount of food between all hoppers is more or equal to 6, a meal will be served and 6 units of food will be *consumed*.
**Note:** when food is consumed from machine, it will start consuming from the hopper with least amount of food and so on.

# Jasmine - UGA Hacks 7

![Jasmine - UGA Hacks 7](https://github.com/charanr0121/ugahacks7/blob/main/UI-UX/UGAHacks7.png?raw=true)

## Inspiration
Environmental, Social, and Governance risks are increasingly driving and guiding investments, but much of investment remains out of reach for the vast majority of Americans. Jasmine aims to solve this disparity by helping Americans conviently invest in stocks, bonds, and cryptocurrencies that align with their personal values. Our naming was very much inspired by Blackrocks Aladdin API.

## What it does
Jasmine helps individuals invest using historical data, personal values, and an algorithmic recommendation system. We also provide simple and intuitive predictions for stock and crypto prices based on Neural Prophet (machine learning). We use consensus mechanisms to inform and educate our users about crypto ESG concerns.

## Challenges:
**NCR** - Eliminate the Friction: In the real world, we constantly deal with slow, inconvenient activities that interrupt the natural flow of our days. However, with the advent of modern technology, these annoying experiences are quickly disappearing (mobile banking, filing taxes, online shopping, online reservations for restaurants). Find a bad or cumbersome experience in a consumer’s daily activities (banking, retail, dining), and design a BETTER WAY to do that annoying task, or bypass it, or fix its issues… i.e. remove the friction.

**Our Solution**: A convient method to invest by constructing a portflio that aligns with personal ESG values.

**Blackrock** - ESG: a solution that can be used to integrate ESG into an individual’s investment experience. Think: how can we educate individual investors on ESG topics, provide easily digestible ESG data, establish an individual’s unique ESG values and potentially even identify ESG solutions that fit a profile. The practice of incorporating ESG information into investment decisions to help enhance risk-adjusted returns.

**Our Solution**: Developed an invesment platform that educates indivual investors on ESG invesments and provides assistant through an algorithmic recommendation system.

## How we built it
Jasmine was built using Python, Flask, React.js, Google BigQuery, and DataWrapper. We pull data from polygon.io, kaggle, and other historical stock sources.

## Accomplishments that we're proud of
A functional prototype of simple investing putting our future first with ESG. Our algorithm weights performance and values almost equally with emphasis on what the individual believes in.

## What's next for Jasmine
The goal is to expand functionality and incorporate a larger stock universe with better modeling capabilities, and more sophisticated recommenders based on similar peer relationships. Our current universes were limited by API call resources and model time.

# Instructions

```
cd ugahacks7-main/client
npm install
cd .. (returning back to main directory)
npm run dev
```

## Individual

To start flask server:
```
cd api
```
first time running:
```
export FLASK_APP=app
```
```
flask run
```

then go to [localhost:5000](localhost:5000)


For react app:
```
cd client
```
```
npm run start
```

then go to [localhost:3000](localhost:3000)

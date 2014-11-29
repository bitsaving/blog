<!--
{
  "layout": "article",
  "title": "Web Components and the Future of Modular CSS",
  "date": "2014-10-31T22:01:36-07:00",
  "draft": true,
  "tags": [
    "CSS",
    "HTML",
    "JavaScript"
  ]
}
-->

I. Problems with CSS
  A. It's not the properties
    1. vertical centering
    2. equal height columns
    3. browser inconsistencies
    3. tricks, hack, unintuitive property combinations, etc.
  B. It's the selectors
    1. Scoping styles
    2. Specificity conflicts
    3. Non-deterministic matching
    4. Dependency management
    5. Removing unused code
  C. All of these problem stem from the lack of a real "module" system in CSS
II. Modular CSS today
  A. BEM, SMACSS, OOCSS (and a million new ones the creep up almost daily)
    1. Principles
      a. single classes (consistent specificity)
      b. decouple layout from theme (structure from skin)
      c. decouple content form container
  B. Abstraction layer
    1. Selectors
      a. code reuse through comma-separated selectors
      b. #sidebar, #footer, .item, .callout { ... }
    2. HTML + CSS
      a. CSS defineds small, modular class-based rules
      b. The HTML templates contain many, many classes
    3. Preprocessor + Selectors
      a. A preprocessor defines modular styles via @mixin or @extend
      b. Those modular styles are assigned to complex selectors
      c. The HTML remains free of most
  C. All of these strategies work to varying degrees, but at the end of the day they are brittle because the selectors are still global.
III. How could CSS be better?
  A. Style scoping
  B. Abstracting implementation details
III. Real CSS Modules
  A. Shadow DOM
    1. Two-way style boundary
    2. The abstraction lives in a style tag inside the shadow root
  B. Context
    1. Selector context is hard to manage and comes with specificity problems, element context is more resuable, easier to reason about, easier to establish intent, and makes dependencies are clearer
IV. Examples
  A. Classes vs Components
    1. Inheritence
    2. Composition
  B. Building a complex component from simple components.
  C. Building a layout from layout primatives.
V. Conclusion



For about as long as people have been writing CSS, people have been writing CSS the same way. Our tools change, methodologies go in an out of fashion, but at the end of the day, most of us serve one CSS file that styles our entire site.

This isn't a critique of our current best-practices, it simply the reality. When we say we write modular CSS we mean that nominally. All CSS rules are global and every rule has the potential to conflict with every other rule. This is just the way it is.

People who are new to CSS often complain that things which should be simple are unnecessarily complex, unintuitive, or hacky. Why do I have to use `border-color: transparent` to make a triangle? Why doesn't `vertical-align: center` ever work when I want it to? Why are the position keywords `static`, `absolute`, and `fixed` all sound like they do the same thing?

Sure these are annoyances, and yes being skilled at CSS does require an encyclopedic knowledge of hacks and tricks, but these things are not the truly hard problems of CSS. These are not the problems that make it nearly impossible to redesign without starting over or prevent the development of new features for fear of the consequences of changing *anything*!

The longer I work in this industry, the more I'm convinced that there are really just two hard problems in CSS:

1. Getting your rules to match the elements you want without them accidentally matching the elements you don't.
2. Solving the first problem without writing too much code.

While this might seem like an oversimplification, I believe it's true. Every truly hard problem I've ever faced in CSS has involved fighting with an existing stylesheet. Far too often this is my dilemma:

* I can't write the rules I want because the existing rules trump them.
* I can't change the existing rules because refactoring would take too long.
* My hand is forced, and I end up writing rules I know are bad.
* Now the problem is worse than when I started.

The situation exists because developers routinely come up with bad solutions to hard problem #2. They think they're being clever, but they're really just digging a whole they'll eventually fall into.

Developers like to notice patterns, and they've been taught not to repeat themselves. So when a developer looks at a site and notices that every time an `<h3>` is followed by `<ul>` in the sidebar, there's a `20px` gap, what do you expect him to do? Most people who encounter this scenario write some form of the following rule:

```css
#sidebar h3 + ul {
  margin-top: 20px;
}
```

This rule isn't necessarily bad. The probably with it is it has the *potential* to be bad. It's going to do exactly what you want it to, but, in the future, it may also do a bunch of stuff you don't want it to do.

Therein lies the problem with most people's CSS. It solves the present problem with little consideration for the future.

## Modular CSS

Modular CSS methodologies ([BEM](http://bem.info/method/), [SMACSS](http://smacss.com/), [OOCSS](https://github.com/stubbornella/oocss/wiki)) have been, in my opinion, one of the things to happen to CSS. While all of these methodologies take a slightly different approach, they all, at their core, do a fantstic job at solved CSS's first hard problem. They codify how to write CSS that styles the elements you want without accidentally affecting the elements you don't.


One of my favorite [Twitter exchanges](https://twitter.com/rstacruz/status/272765333977325568) on the subject of methodologies:

> [@simurai](https://twitter.com/simurai): "I think the problem with the 'never use IDs' debate is that both sides come from two different perspectives. Small site vs large site."
> <br>[@rstacruz](https://twitter.com/rstacruz): "@simurai Where is this debate being held?"
> <br>[@divya](https://twitter.com/divya): "@rstacruz on small sites.""

## Code Reuse

### Inheritence

```
var root = this.createShadowRoot();
var



# Human Centered Design

Welcome to my repository for the course Human Centered Design during the minor Web Design & Development, academic year 23-24. This course is about the end users that will be using our applications and websites, their needs as well as their struggles. 

As a student learning to program websites, I'm used to learning about the creative and practical aspects of web development. Make a site look good and make sure it works - a sentiment that I have been taught to adopt in my process. But there's an entire group in society has to be considered, a group that is alienalized on the internet, the very place that's growing in importance and increasing in importance for the ability to function in daily life.

This course is meant to put this group on the foreground, rather than keeping them as an afterthought, and we do that by literally taking them to the foreground of our process.

The class got divided into groups of three, each group assigned to a different end user. One end user was blind and required an application that allowed her to find an outfit, another end user was deaf and required appropriate and engaging closed captions, and another end user had limited motor skills and needed to be able to copy, paste and scroll with her pen and a digital tablet (Wacom).

The latter, a woman named Nicolette, was the end user of the group I belonged to, which meant that it was up to me to build her a copy-, paste- and scrollfunction. I decided to do so in the form of a 'reader', in which I provided Nicolette with a section of the story 'Ash Maiden' (the original story of Cinderella by the brothers Grimm). Nicolette would be able to copy the text, paste it elsewhere, and scroll the page without any hassle!

## Index
1. [Process](#process)
	- [Debrief](#debrief)
	- [First test](#first-test)
	- [Second test](#second-test)
	- [Third test](#third-test)
2. [The Design Principles](#the-design-principles)
	- [Study Situation](#study-situation)
	- [Ignore Conventions](#ignore-conventions)
	- [Prioritise Identity](#prioritise-identity)
	- [Add Nonsense]()
3. [Reflection](#reflection)
4. [Sources](#sources)

## Process

### Debrief

...

### First prototype test | April 11th 2024

#### The prototype

In preparation for the first test, I built a simple site that had a few functions. For one: I added the function that allowed Nicolette to make a selection with two clicks that would define a starting point and an end point. In my first considerations, I presumed that it would be more intuitive to make a selection by point than by word so that Nicolette's selection could be more detailed. For example: 

Clicking after the first 'q' in the sentence "_I guessed the query correctly_" and then after the 'y' of 'correctly' would return "_eury correctly_".

Additionally, I added the function that allowed Nicolette to copy her selection by pressing 'C' on her keyboard and paste it by pressing 'P' on her keyboard. During the introduction, Nicolette shared that having to press two keys simultaneously in order to copy and paste made this action impossible for her, so I figured that reducing the number of keys requiring a keypress to one would make this easier for her.

#### The test

During the testing, I connected Nicolette's Wacom tablet to my laptop and asked her to move the mouse, which she did. The connection was succesful: so far, so good!

However, once I gave her the first assignment, it became clear to me how difficult it would be for her to be so precise in selection a specific start- and endpoint in the text. She brought the cursor over to the first word and I watched her hover, hesitating over the 'T', the 'h' and then the 'e' that formed the introduction to the text. At once, she made her click, but it diverged from the point she meant to and selected only the 'h' and the 'e'. There was a sheepish look on her face as she turned to me and said, "Yes, this won't work for me."

I nodded my head. "Okay," I said resolutely. "Would it be easier if I allowed you to select words instead of individual letters?" She confirmed that it would, and I made a mental note of this.

To then still test my next functionality, the copying and the pasting, I made a selection for her and gave her my next instruction. "You can copy this selection by pressing 'C' on your keyboard, and paste it by pressing 'P'."

Again, Nicolette shook her head. "My hands won't allow me. Anything with keyboards is too hard for me."

In this moment, I'd realized that I misunderstood her. Instead of not being able to press two keys simultaneously, Nicolette's hands didn't let her press keys at all. Which, yes, in hindsight was completely understandable, as she navigates with her pen and it would be too complicated to have to switch all the time, even if pressing the keys wasn't an issue. During this test, my curiosity to how Nicolette typed when the keys made it so difficult for her was satisfied with a simple answer: she uses a text-to-speech software.

#### Lessons learned

This test confronted me with the misconceptions I'd had about Nicolette's abilities and the extent of them. In retrospect, how exactly would one key be better than two, and how would a person with limited motor skills be able to perfectly line up their cursor with a small, almost pixel-sized point on a big screen? This test allowed me to come up with a few lessons learned, and a few ideas as to how to implement them:

1. Nicolette needs a bigger window for clicking (which aids in her selection process), can be implemented by
	- Selecting by word instead of point
2. Nicolette needs feedback on what she was about to select. When the second word was clicked, that's when the selection showed on the screen, but she is left in the dark until then, which needs to change. Can be implemented by
	- Making it clearer where she's hovering / what she's selecting before the selection has an end point
3. Nicolette needs to be able to copy and paste without the keyboard, can be implemented by
	- Using elements she can click with her mouse, like buttons

Something I also heard was that she struggled with scrolling. My 'application' fit in one viewport, so I decided to focus on the aforementioned points this week.

### Second prototype test | April 17th 2024

#### The prototype

Last week's test allowed me to revise the decisions I made before. I chose to approach this from a different angle this time: I was going to almost exaggarate my idea of what Nicolette's needs were, and come up with a solution that perfectly fit those needs. I started by modifying the selection system. First, I made it so that entire words were selected, and then I added a distinctive styling to the first selected node by toggling a class 'selected'. This way, when Nicolette clicked in the text, a word would be selected and she'd immediately know what word that was.

Additionally, I refined this experience / action by increasing the font-size of words that were hovered. This was done by wrapping each word in a `span`, and then scaling the spans up on hover. Now, Nicolette would have two different kinds of visual feedback: a clear background color to indicate her hover and selection, as well as a bigger word to indicate where she was about to click, allowing her to make more exact selections.

Next, I tackled the copy and paste problem by changing those actions from keypresses to buttons. The buttons also offer feedback by increasing in size and changing in color when they're being hovered over, and their `textContent` and color changing when they've been clicked. When the user has copied, the text changes from "Copy" to "Copied!" and the same thing happens for "Paste" and "Pasted!".

Lastly, I added a "Clear" button to the bottom of the textarea, that clears it when Nicolette is done and satisfied with her selection and whatever changes she has made for it. This empties the textarea and returns the "Pasted!" button to its original state of "Paste".

#### The test

This time around, I fostered a careful optimism about my solution. Like last time, I asked Nicolette to test whether her stylus worked with my laptop and it did. I tasked her with making a selection.

She easily brought her pen over to the paragraph. The fact that the words got bigger and highlighted as she went over them excited her. Somewhat of a playful side came to light as she decided what she wished to select. "Maiden..." she said, and clicked. When she removed her cursor from this word, the highlight remained, clarifying what she'd set as her starting point. "And... earn."

At the click on her second word, all text in between got selected with the recognizable standard selection color. This excited her - it was a direct confirmation that her actions had a result.

I directed her to the "Copy" button, which she clicked smoothly. Last time, due to the use of keys, there was no feedback offered to her when she succesfully copied something - but this time, there was. The button changed to "Copied!" and she immediately knew to navigate to "Paste" which, like a pattern, worked the exact same way. During this process, no extra steps - like clicking inside of the textarea to paste - were required nor expected.

Nicolette was already excited about the fact that within half a minute, she had selected, copied and pasted and had known how to do so intuitively. I told her that pasting her selection inside of a textarea meant that she would be able to edit it if needed, and I pointed her to the last button: the "Clear" button. In one click, Nicolette found that her textarea was emptied and her buttons reset for her next selection / copy.

She turned to me with a bright smile on her face. "It works perfectly," she said. "It's all perfect?"

Her positive feedback came with a big feeling of relief. "Really? Is there anything I can add?"

Nicolette couldn't think of anything, but I could. I explained to her that if she made particularly big selections, the text could get too long for the textarea and that I wanted to add 'scroll'-buttons to allow her to navigate in there.

She nodded her head. "I would like that."

#### Lessons learned

Sometimes, teachers will tell you that negative feedback is better than positive feedback, because at least you can *do something and improve* with negative feedback. But today, I disagreed. Seeing Nicolette's genuine happiness and surprise at the ease of the functions and hearing her say that she couldn't think of anything to add was the best possible news, especially in light of this test's contrast with that of last week. Since the functions seemed to perfectly align with Nicolette's needs, I didn't want to take away from any of that by fiddling with them any more. That's why I decided to only focus on additions for next week:

1. Allowing Nicolette to scroll inside of textareas, can be implemented by
	- Scroll buttons at its side with realistic intervals
2. Tinkling with the UI to make it more fun to use, can be implemented by
	- Icons in buttons
	- A happy color palette
	- Extra functions by decreasing/increasing font-size

I'm excited to see Nicolette's reaction next week when I've implemented all of this!

### Third prototype test | April 24th 2024

#### The prototype

/

#### The test

/

#### Lessons learned

[...] This test allowed me to come up with a few lessons learned, and a few ideas as to how to implement them. If I had more time, I would've:

1. , can be implemented by
	- ...
2. , can be implemented by
	- ...
3. , can be implemented by
	- ...

I also wanted to add 

## The Design Principles

### Study Situation

...

### Ignore conventions

...

### Prioritise identity

...

### Add Nonsense

...

## Reflection

...

## Sources

1. One
2. Two
3. Three
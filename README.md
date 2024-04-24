# Human Centered Design

<img src="/public/images/hcd.gif" width="750px">

Welcome to my repository for the course Human Centered Design during the minor Web Design & Development, academic year 23-24. This course is about the end users that will be using our applications and websites, their needs as well as their struggles. 

As a student learning to program websites, I'm used to learning about the creative and practical aspects of web development. Make a site look good and make sure it works - a sentiment that I have been taught to adopt in my process. But there's an entire group in society that has to be considered, a group that is alienalized on the internet, the very place that's growing in importance for the ability to function in daily life.

This course is meant to put this group on the foreground, rather than keeping them as an afterthought, and we do that by literally taking them to the foreground of our process.

The class got divided into groups of three, each group assigned to a different end user. One end user was blind and required an application that allowed her to find an outfit, another end user was deaf and required appropriate and engaging closed captions, and another end user had limited motor skills and needed to be able to copy, paste and scroll with her pen and a digital tablet (Wacom).

The latter, a woman named Nicolette, was the end user of the group I belonged to, which meant that it was up to me to build her a copy-, paste- and scrollfunction. I decided to do so in the form of a 'reader', in which I provided Nicolette with a section of the story 'Ash Maiden' (the original story of Cinderella by the brothers Grimm). Nicolette would be able to copy the text, paste it elsewhere, and scroll the page without any hassle!

## Index
1. [Debrief](#debrief)
	- [Study Situation](#study-situation)
	- [Ignore Conventions](#ignore-conventions)
	- [Prioritise Identity](#prioritise-identity)
	- [Add Nonsense]()
2. [Process](#process)
	- [First test](#first-test)
		- [Teacher's feedback week 1](#teachers-feedback-week-1)
	- [Second test](#second-test)
		- [Teacher's feedback week 2](#teachers-feedback-week-2)
	- [Third test](#third-test)
3. [Reflection](#reflection)
4. [Sources](#sources)

## Process

### Debrief

Aside from being nominated for the award "Amsterdammer of the Year" in 2016, receiving the royal distinction "Knight in the Order of Orange Nassau" and being a big name in the field of disability rights, Nicolette Besemer is a wheelchair-user. Due to a neurological condition, the part of her nerves that relay information are broken. This means that she has no sensations in her hands: she can't feel what she's holding onto and cannot operate a keyboard as, in her words, her fingers don't know where to go. To still use the web and electronics, Nicolette makes use of speech software and a tablet.

But even with these aids, there are things that Nicolette is unable to do. A few of them being copying, pasting, scrolling, and dragging-and-dropping. It's up to me to build a functionality that solves at least the first three problems for her. I'll do so gladly.


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

#### Teacher's feedback Week 1

After testing with Nicolette, I had a feedback session with Vasilis on Friday. I showed him my prototype and told him about Nicolette's opinions. At this point, I had already implemented some of the ideas like the buttons instead of key clicks, and Vasilis also had some thoughts on this:

1. *Copy on select*: it might be a good idea to add the function that when a selection is made it's automatically saved to the clipboard. This reduces the amount of clicks necessary to complete this function.
	- _Am I implementing this?_: I considered adding this functionality to my app, but then I considered the scenarios Nicolette might be in. For example, what if she merely wants to select and copy a single word? She wouldn't be able to copy her selection until an end-point was also defined. I could also override her one-word selection/copy with the long version that includes an end-point, but I'm still thinking about that.
2. *Scroll*: when thinking about scroll, I need to consider the effect of such a button-click. How much is one click scrolling? How do I prevent the need for multiple clicks, especially since this is difficult for Nicolette to have to do?
	- _Am I implementing this?_: I am most definitely implementing this, but I don't think the function will be done by next week, since the fact that the scroll needs to happen and be limited to the inside of the textarea adds a layer of complexity to it.
3. *Too many buttons*: Vasilis suggested that having a copy and paste button on top of clicking for selection could add up to too many clicks. This blends into his first suggestion: copying on select. However, I think the copy- and paste buttons are very valuable to Nicolette's experience, as they offer immediate and clear feedback about her actions (the copy button saying 'Copied!' when necessary, same for the paste button saying 'Pasted!') so I want to keep them for now and get her opinion during the test next week.

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

She turned to me with a bright smile on her face. "It works perfectly," she said. "It's all perfect."

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

#### Teacher's feedback Week 2

After testing with Nicolette on Wednesday, I had two feedback sessions with my teachers. First, I spoke to Tamara on Thursday and filled her in on my progress, choices, and Nicolette's opinions, as well as my plans. She liked the feedback of the cursor and the buttons as well, but had a few additional suggestions:

1. *Character count*: As the textarea has limited space, I'm adding a scroll to this element. To provide Nicolette with even more feedback, I can add a character count somewhere at the bottom of the input.
	- _Am I implementing this?_: I like the idea of adding to the visual input confirming Nicolette's interaction. I don't think this will be too difficult, so I definitely want to implement this.
2. *Social actions*: I now have all necessary components to allow Nicolette to do what she needs to, but there's more to add in order to give her even more control. The text Nicolette copies gets pasted in the textarea, but what else? Tamara suggested I add 'social buttons' to share the contents of the textarea on the socials of her choice.
	- _Am I implementing this?_: This seems like something I'll do if I have the time. I do agree that I should go the extra mile (if this can even be considered doing so), so it's on my list.
3. *Buttons closer to text*: My classmate Quinten said that the copy and paste buttons might be too far away from the text, but he also commented that this could be because of the size of the TV-screen we were testing on. Since Nicolette didn't have any issues with this, I decided to let it be.

### Third prototype test | April 24th 2024

#### The prototype

For my final test with Nicolette, I wanted to do a complete stylistic overhaul. I decided to start anew with my controls as I added additional functionalities. My idea was to create a sort of toolbar at the top of the page and split the content in two: there's the story, and the interaction - the latter is the text field Nicolette's selected text gets pasted into.

The toolbar aligns with the content, so the tools (buttons) for interacting with the story are above the story, and the tools for interacting with the pasted text are above of the section 'interaction'. This way, it's more intuitive and telling what certain buttons will do and what they're meant for.

As for functionalities, I added the ability to scroll within the text area with clear 'Scroll Up' and 'Scroll Down' buttons. For now, they scroll by 100 pixels per click, but I'm intending to ask Nicolette whether this value is too big or too small as she navigates. I also added a 'Copy This' button to copy the text in the textarea, since Nicolette can select snippets of the text and combine them, and she might want to then be able to copy what she's made of it. Lastly, I added a character count at the bottom of the textarea, where Nicolette can see how much is inside of it. This is important because when she pastes text into this area, she needs to receive proper feeedback of it.

Here are the stylistic differences between my previous and current version:

<img src="/public/images/readme-oldsite.png" width="500px"> <img src="/public/images/readme-newsite.png" width="500px">

Aside from being able to 're-copy' the text, I want to give Nicolette the ability to share her text in more ways. Maybe she would like to email her text to her grandson, or text it to a friend, or Airdrop it to a coworker. For this, I'm thinking of adding the Safari share menu, but that's if this next text is succesfull.

I view this week's additions as enhancements, I hope Nicolette sees them the same way!

#### The test

As we do every test again, my first order of business was making sure that Nicolette's stylus worked with my laptop. When it did, I tasked her with making a selection and pasting it, then making another and pasting that, too. This way, the textarea was overflowing with text, as intended. I point Nicolette to the character count that offers her feedback every time she pastes something, and then tell her that she can scroll up and down with the buttons.

"The way the scrolling works now, is that each time you click, it scrolls a certain distance. Is this distance too little or too big for your liking?" I asked.

"It's just right," said Nicolette. "I don't like when it scrolls too fast, I want to still see where I am in the text, just like this."

Nicolette also liked the fact that she could edit her pasted text. Last week I explained to her that her pasted text was editable in the textarea, which meant she could cut and paste however she wished to. This time, she was also able to copy this edited text for other purposes like sharing, as well as scrolling inside of there.

The additions I made were perfect, Nicolette said. She was amazingly happy with the new abilities added to the site and even said there was nothing to improve or add. I ended my assessment by telling her, "Well, that's it," and she said, "It's a lot, it's much more than last week! I'm constantly surprised!"

Even though she was happy last week, I'm glad that I've been able to surprise her once again with things that she maybe didn't ask for, but did end up enhancing her experience. She appreciated the feedback she got in every step of the way, especially since this meant that she didn't need an explanation from me. Everything worked as it was supposed to, and it was all greatly appreciated.


#### Lessons learned

This test made me realize how much the different interactions make a big difference for Nicolette. From the very start, I aimed to give her as much feedback as possible and I'm very proud to see the effect of these additions. If I had more time, I probably would have dove into sharing on different platforms like Whatsapp, Twitter and Facebook. But seeing how Nicolette's dreams have been realized with the functions I've built, I'm as relieved as she is to have what I've got before the deadline. A happy Nicolette, a happy app, a happy me! 

## Reflection

As I said, I'm very happy with what I've got!

I'm super proud of:
- Making selections with two clicks;
- The visual feedback on clicks that tells the user immediately the selection has been succesful;
- The copy- and paste with buttons functionalities;
- User selection getting pasted into the textarea directly;
- Scrolling up and down inside the textarea with buttons;
- Character count feedback that updates dynamically;
- The ability to copy the pasted text again, since it is editable;
- Button states and selection states

I've also had to let go of some things:
- Sharing on socials

Well, technically that's _one_ thing. So, I'm happy anyway!

### Exclusive Design Principles

#### Study Situation

Nicolette tells us during our first meeting that she has limited control over her fingers, and that this means that she is unable to use her keyboard - at least, pressing two keys simultaneously is near-impossible. This meant that I had two options - add single-key functions (interactions) or add buttons. I wanted to make her experience as simple and intuitive as possible, as well as adding many possibilities for feedback and interaction confirmation, which I'm happy to say have both been succesfully integrated.

#### Ignore conventions 

When you think of copying and pasting, your mind probably automatically goes to the keys 'C' and 'V'. So did mine. That's why, for the copy and paste functions, I reduced both actions to those single keys. A test with Nicolette revealed that this was in fact a convention that could and should be ignored. I considered her hands and her assistive tools, and came to the conclusion that these functions should be modified to fit her manner of interacting with her device. She's mouse-bound, to put it simply, so how do you make intuitive, mouse-based interactions? Right - buttons and clicks. I ignored the computer's standard behavior and the standard ideas we have about interactions like these, and built every function behind buttons, providing them with mouse-feedback like hover-effects and user-(visual)feedback like dynamic text. This way, Nicolette and her way of navigating was fully accommodated.

#### Prioritise identity

During the tests, Nicolette told us that she doesn't like dark interfaces. This is why I opted for a light and breezy design that's simple, straight-forward and easy on the eyes. Additionally, I considered changed the text to a story about geography in week two as it's one of Nicolette's hobbies where she's the main character, and I put her name in the page's title. This application is just for her, and I hope that by making these changes, that shows.

#### Add Nonsense

I'm going to be honest - I haven't really added nonsense to this app as I was focused on meeting Nicolette's needs and adding additional functionalities that would actually change her user experience and add to the things she'd be able to do with the app. I love this principle, and if I had a bit more time I definitely would have added something playful and fun, but with my limited time, I'm just happy that she is.

### All in all

I'm very satisfied with how this project turned out. At first glance it might appear to be extremely simple and not very impressive - but the thing is that behind the scenes, it is. Every decision was carefully weighed based on research and tests with Nicolette, her abilities considered, her opinions valued. I've learned that when it comes to accessibility, you really can't take it 'too far'. In fact, taking it farther just makes something easier for a whole lot of people.

In a way, I guess that's where my _Add Nonsense_ comes in: I let go of assumptions, I let go of patterns, I overestimated how simple things needed to be and by doing so I hit the nail right on the head. This nonsense led me to the logical, fitting, structured solution that Nicolette is so happy with. I'm very proud it did.

## Sources

1. grid-column-end - CSS: Cascading Style Sheets | MDN. (2023, 18 juli). MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
2. Material Symbols and Icons - Google Fonts. (z.d.). Google Fonts. https://fonts.google.com/icons?selected=Material+Symbols+Outlined:close:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=close
3. The Project Gutenberg eBook of Grimm’s Fairy Tales, by Frances Jenkins Olcott (Editor). (z.d.). https://www.gutenberg.org/files/52521/52521-h/52521-h.htm#hdr_10
4. Using JavaScript & contenteditable | scottohara.me. (2018, 23 november). https://www.scottohara.me/blog/2014/05/08/contenteditable.html
5. Why position: absolute; and bottom: 0; not being at body’s bottom? (z.d.). Stack Overflow. https://stackoverflow.com/questions/53855904/why-position-absolute-and-bottom-0-not-being-at-bodys-bottom
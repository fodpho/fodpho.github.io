---
title:  "Markdown Syntax Examples"
date:   2021-12-16
tags: [cheatsheet, Markdown]
---

## New Lines

To start a new line, simply end a line with two spaces.
To create a new paragraph, use a blank line to seperate different lines.

This is a line.  
This is another line.

```
To start a new line, simply end a line with two spaces.
To create a new paragraph, use a blank line to seperate different lines.

This is a line.  
This is another line.
```

## Headings

Headings can be created by adding the number sign `#` at the beginning of a new line, like `## Headings`. The more `#` signs there are, the smaller the heading level will be. The smallest level is 6.

<h1> Heading level 1 </h1>

Created by `# Heading level 1`, I use it for the artitle title.

<h2> Heading level 2 </h2>

Created by `## Heading level 2`, I use it for the section title.

<h3> Heading level 3 </h3>

Created by `### Heading level 3`, I use it for the sub-section name.

<h4> Heading level 4 </h4>

Created by `#### Heading level 4`, I use it for the sub-sub-section name.

<h5> Heading level 5 </h5>

Created by `##### Heading level 5`, I rarely use it.

<h6> Heading level 6 </h6>

Created by `###### Heading level 6`, I rarely use it.


**Note**: It is a good practice to put blank lines above and below a heading line for compatibility reasons.
{: .notice--info}


## Emphasis

This is **bold text**.  
Here is *italic ones*.  
We can also ***do both***.

<u> This line is important, so it has underline. </u>   
<s> I do not like this, so strikethrough </s>

```
This is **bold text**.  
Here is *italic ones*.  
We can also ***do both***.

<u> This line is important, so it has underline. </u>   
<s> I do not like this, so strikethrough </s>
```

As shown in the code, changing text to bold and italic forms are straightforward, for underline and strikethrough, the HTML style notation is used here because Markdown dose not support doing that directly. More HTML styled inline text semantics can be found from the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics).

**Note**: Not all Markdown applications render HTML in the same way, some of them do not even support HTML for security reasons, check out the documentation if in doubt.
{: .notice--info}

## Links and Emails

Clickable link: <https://duckduckgo.com>.  
Email as well: <fodpho@protonmail.com>.  
Link with customized text: [This is my website](https://fodpho.github.io).

```
Clickable link: <https://duckduckgo.com>.  
Email as well: <fodpho@protonmail.com>.  
Link with customized text: [This is my website](https://fodpho.github.io).
```

### Reference style

A planet is any of the large bodies that orbit the [Sun][], including [Mercury][1],
[Venus][2], [Earth][3], [Mars][4], [Jupiter][5], [Saturn][6], [Uranus][7], and
[Neptune][8], in order of closeness to the Sun.

[Sun]: https://en.wikipedia.org/wiki/Sun "Sun"
[1]: https://en.wikipedia.org/wiki/Mercury_(planet)
[2]: https://en.wikipedia.org/wiki/Venus
[3]: https://en.wikipedia.org/wiki/Earth
[4]: https://en.wikipedia.org/wiki/Mars
[5]: https://en.wikipedia.org/wiki/Jupiter
[6]: https://en.wikipedia.org/wiki/Saturn
[7]: https://en.wikipedia.org/wiki/Uranus

```
A planet is any of the large bodies that orbit the [Sun][], including [Mercury][1],
[Venus][2], [Earth][3], [Mars][4], [Jupiter][5], [Saturn][6], [Uranus][7], and
[Neptune][8], in order of closeness to the Sun.

[Sun]: https://en.wikipedia.org/wiki/Sun "Sun"
[1]: https://en.wikipedia.org/wiki/Mercury_(planet)
[2]: https://en.wikipedia.org/wiki/Venus
[3]: https://en.wikipedia.org/wiki/Earth
[4]: https://en.wikipedia.org/wiki/Mars
[5]: https://en.wikipedia.org/wiki/Jupiter
[6]: https://en.wikipedia.org/wiki/Saturn
[7]: https://en.wikipedia.org/wiki/Uranus
[8]: https://en.wikipedia.org/wiki/Neptune
```

In the text, the links is created by `[link name][arbitrary_id]`, the `arbitrary_id` is omitted. The reference entries can bu put anywhere in the article, usually at the end of the paragraph or section, the entry has the form `[arbitrary_id]: URL "Title"`, if `arbitrary_id` is omitted, the link name is used here, `"Title"` is the name displayed when the mouse cursor is on the clickable link, it is optional.


## Images

![Linux tux](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tux2.png/202px-Tux2.png "The Linux penguin")

```
![Linux tux](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tux2.png/202px-Tux2.png "The Linux penguin")
```

The name in the square bracket is the alt text, which is the description of images and can be useful when searching. Within the parentheses is the link to the image, it can also be a local file address. An optional title can be appended to the image URL.

It is also possible to make a image clickable, which is shown below.

[![Duckduckgo icon](https://duckduckgo.com/favicon.png "Duckduckgo")](https://duckduckgo.com)

```
[![Duckduckgo icon](https://duckduckgo.com/favicon.png "Duckduckgo")](https://duckduckgo.com)
```


## Lists

### Ordered lists

1. First item
2. Second item
3. Third item
    1. Indented item
    1. Indented item
1. Fourth item
88. Fifth item
10000. Sixth item
3. Seventh item

```
1. First item
2. Second item
3. Third item
    1. Indented item
    1. Indented item
1. Fourth item
88. Fifth item
10000. Sixth item
3. Seventh item
```

From the code, it can be seen that the actual number used is not important, the output always starts from one and increases by one each time.

### Unordered lists

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

```
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

The dash sign `-` at the beginning of each line can be replaced by the asterisk sign `*` or the plus sign `+`, but it is not a good practice to mix them in one list.


### Adding things in lists

Adding things in lists while keeping the order can be achieved by indenting the content added.

1. First item
2. Second item
3. Third item
    1. Indented item

        Hi, there, let's add a table here

        | Name | Price |
        |:--:|:--:|
        | Apple | 3 |
        | Pineapple | 5 |
        | Orange | 4.5 |

    1. Indented item
1. Fourth item

    Or a quote

    > Appear weak when you are strong, and strong when you are weak.  
    > Sun Tzu, The Art of War

88. Fifth item

```
1. First item
2. Second item
3. Third item
    1. Indented item

        Hi, there, let's add a table here

        | Name | Price |
        |:--:|:--:|
        | Apple | 3 |
        | Pineapple | 5 |
        | Orange | 4.5 |

    1. Indented item
1. Fourth item

    Or a quote

    > Appear weak when you are strong, and strong when you are weak.  
    > Sun Tzu, The Art of War

88. Fifth item
```

## Code

### Inline code

Surround the text by backtick sign `` ` `` and it will be displayed like inline code. Code? `Code!`

### Code blocks

Start with three backtick signs, followed by the language name (depends on whether the application supports it), then start a new line to write  code, the block is ended by another three backtick signs.

```c++
// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

the block about is generated by

````
```c++
// Your First C++ Program

#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```
````

**Note**: To show one backtick in code (inline or block), surround it by two backticks, to show three, surround it by four, for example, the block above containing three backticks are surround by four backticks instead of three.
{: .notice--info}


## Blockquotes

> It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God,
>> shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.  
>
> Abraham Lincoln, Gettysburg Address


```
> It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God,
>> shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.  
>
> Abraham Lincoln, Gettysburg Address
```

## Tables

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

```
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```

There are GUI tools that helps creating tables in Markdown, [Tables Generator](https://www.tablesgenerator.com/markdown_tables#) is one of them.

## Horizontal Rules

To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves.

***

---

## Escaping Characters

To type these characters, type a backslash before them to escape the character.

| Character | Name |
|:--:|:--|
| \\ | backslash |
| \` | backtick |
| \* | asterisk |
| \_ | underscore |
| \{ \} | curly braces |
| \[ \] | brackets |
| \< \> | angle brackets |
| \# | number sign |
| \+ | plus sign |
| \- | hyphen |
| \. | dot |
| \! | exclamation mark |
| \| | pipe |

Note: To display a pipe (|) character in a table, use its HTML character code (`&#124;`).


## Math Equations

Depending on the application, the method used to render math equation may be different, in some cases, equations are surrounded by the dollar sign `$`, the format is the same as equations in LaTex. It is better to read the documentation first. As for writing LaTex style equations, [another post of mine](https://fodpho.github.io/LaTex-math-cheatsheet/) gives some examples about it.

## More Information

- <https://www.markdownguide.org/basic-syntax/>
- <https://www.markdownguide.org/extended-syntax>
- <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
- <https://www.bluehost.com/resources/what-is-alt-text/>

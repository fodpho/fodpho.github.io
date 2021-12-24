---
title:  "ImageMagick Examples"
date:   2021-12-13
tags: [tools]
---

[Imagemagick](https://imagemagick.org/index.php) is a powerful image editing software that supports a wide range of formats and can do a variety of jobs in terms of image editing.

## Combine images into PDF

```bash
convert *.jpg -background white -page a4 output.pdf
```

## Convert PDF to images

### All pages

```bash
convert -density 150 input.pdf -quality 90 output-%03d.jpg
```

`%3d` here is for the naming, the generated files will be names as `output-001.jpg`, `output-002.jpg`, etc..

### A range of pages

```bash
convert -density 150 input.pdf[0-5] -quality 90 output-%02d.jpg
```

## Combine images

```bash
# Concatenate horizontally
convert in1.png in2.png in3.png +append out.png
# OR
convert in*.png +append out.png
# Concatenate vertically
convert in1.png in2.png in3.png -append out.png
# OR
convert in*.png -append out.png
```

In most cases, the input images do not have the same size, in those cases, the `-resize` option can be used.

```bash
# Let the output image has the height of 500px
convert +append in*.png -resize x500 output.png

# Let the output image has the width of 700px
convert -append in*.png -resize 700x output.png
```

## Extract images from font file

```bash
convert -background white -fill black -font <FONT_FILE> -pointsize 32 -size 32x48 label:<CHARACTER> output.png
```

Font file type can be `.ttf` or `.otf`, the character can also be generated using the unicode.

```bash
echo -e '/u4e00'
一
```

The following script generates common Chinese characters from a font file to many png images. It should be placed in the same folder as the font file, all generated images are located in the output folder.

```bash
#!/bin/bash
for i in {19968..40959}
# 40959
do
	hex=$(printf "%x" $i)
	u='\u'
	hex=$u$hex
	convert -background black -fill white -font SourceHanSansSC-Regular.otf -pointsize 32 -size 32x48 label:$(echo -e $hex) output/$(expr $i - 19967).png
	echo $(expr $i - 19967)
done
```


## More information

- <https://imagemagick.org/script/convert.php>
- <https://en.wikipedia.org/wiki/List_of_Unicode_characters>

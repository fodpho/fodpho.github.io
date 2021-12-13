---
title:  "ImageMagick Examples"
date:   2021-12-13
toc_sticky: false
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

## More information

- <https://imagemagick.org/script/convert.php>
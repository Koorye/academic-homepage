---
pageClass: home-page
# some data for the components

name: Shihan Wu (吴世涵)
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/Koorye
  - title: googleScholar
    icon: "/icons/google-scholar.svg"
    link: https://scholar.google.com/citations?hl=en&user=7VCaV5EAAAAJ
  - title: dblp
    icon: "/icons/dblp.svg"
    link: https://dblp.org/pid/132/9517-1.html

cv: https://github.com/Koorye/Koorye.github.io/blob/main/static/resume-en.pdf
cvCN: https://github.com/Koorye/Koorye.github.io/blob/main/static/resume-zh_CN.pdf
bio: MS Student, School of Computer Science and Engineering, University of Electronic science and technology of China (UESTC)
email: shihan.wu.koorye@outlook.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## Introduction

I am a master student at the School of Computer Science and Engineering, University of Electronic Science and Technology of China (UESTC). My research interests include multi-modal large models, transfer learning and Robotics.

## News

- [Feb. 27, 2025] Our paper "Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters ThemselvesSkip" has been accepted by CVPR 2025!

## Education & Experiences

[→ Full list](/about/)

- Master student at **University of Electronic Science and Technology of China (UESTC)** 2023 - Present
- Bachelor student at **University of Electronic Science and Technology of China (UESTC)** 2019 - 2023

## Publications

[→ Full list](/publications/)

<ProjectCard image="/pubs/skiptuning.png" hideBorder=true>

  **[CVPR 2025] Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters Themselves**

  **Shihan Wu**, Ji Zhang, Pengpeng Zeng, Lianli Gao, Jingkuan Song, Heng Tao Shen

  Vision-language Models · Transfer Learning · Efficiency

  2024.12

  [[PDF](https://arxiv.org/pdf/2412.11509)] [[arXiv](https://arxiv.org/abs/2412.11509)] [[Code](https://github.com/Koorye/SkipTuning)]

</ProjectCard>

<ProjectCard image="/pubs/dept.png" hideBorder=true>

  **[CVPR 2024] DePT: Decoupled Prompt Tuning**

  Ji Zhang#, **Shihan Wu#**, Lianli Gao, Heng Tao Shen, Jingkuan Song

  Vision-language Models · Transfer Learning · Prompt Tuning

  2023.9

  [[PDF](https://arxiv.org/pdf/2309.07439)] [[arXiv](https://arxiv.org/abs/2309.07439)] [[Code](https://github.com/Koorye/DePT)]

</ProjectCard>


## Awards & Honors

[→ Full list](/about/)

- **National Scholarship**, Ministry of Education of the People's Republic of China, 2024
- **Outstanding Graduate**, University of Electronic Science and Technology of China (UESTC), 2023

<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>

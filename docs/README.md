---
pageClass: home-page
# some data for the components

name: Shihan Wu
profile: /profile.png

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/Koorye

bio: Master Student at University of Electronic science and technology of China (UESTC)
email: shihan.wu.koorye@outlook.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a master student at University of Electronic Science and Technology of China (UESTC). My research interests include computer vision, machine learning, and deep learning. I am currently working on the research of image processing and computer vision. I am also interested in web development and data visualization.

## News

- [Feb. 27, 2025] Our paper "Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters ThemselvesSkip" has been accepted by CVPR 2025.

## Education & Experiences

- Master student at **University of Electronic Science and Technology of China (UESTC)** 2023 - Present
- Bachelor student at **University of Electronic Science and Technology of China (UESTC)** 2019 - 2023

## Projects

<ProjectCard image="/projects/skiptuning.png" hideBorder=true>

  **[CVPR 2025] Skip Tuning: Pre-trained Vision-Language Models are Effective and Efficient Adapters Themselves**
  
  **Shihan Wu**, Ji Zhang, Pengpeng Zeng, Lianli Gao, Jingkuan Song, Heng Tao Shen

  Prompt tuning (PT) has long been recognized as an effective and efficient paradigm for transferring large pre-trained vision-language models (VLMs) to downstream tasks by learning a tiny set of context vectors. Nevertheless, in this work, we reveal that freezing the parameters of VLMs during learning the context vectors neither facilitates the transferability of pre-trained knowledge nor improves the memory and time efficiency significantly. Upon further investigation, we find that reducing both the length and width of the feature-gradient propagation flows of the full fine-tuning (FT) baseline is key to achieving effective and efficient knowledge transfer. Motivated by this, we propose Skip Tuning, a novel paradigm for adapting VLMs to downstream tasks. Unlike existing PT or adapter-based methods, Skip Tuning applies Layer-wise Skipping (LSkip) and Class-wise Skipping (CSkip) upon the FT baseline without introducing extra context vectors or adapter modules. Extensive experiments across a wide spectrum of benchmarks demonstrate the superior effectiveness and efficiency of our Skip Tuning over both PT and adapter-based methods.
  
  [[PDF](https://arxiv.org/pdf/2412.11509)] [[arXiv](https://arxiv.org/abs/2412.11509)]

</ProjectCard>

<ProjectCard image="/projects/dept.png" hideBorder=true>

  **[CVPR 2024] DePT: Decoupled Prompt Tuning**

  Ji Zhang#, **Shihan Wu#**, Lianli Gao, Heng Tao Shen, Jingkuan Song
  
  Prompt tuning has shown great success in adapting large vision-language pre-trained models to downstream tasks. A plethora of methods have been proposed to tackle the base- new tradeoff (BNT) dilemma, i.e., the better the adapted model generalizes to the base (a.k.a. target) task, the worse it generalizes to new tasks, and vice versa. Despite this, the BNT problem is still far from being resolved and its underlying mechanisms are poorly understood. In this work, we bridge this gap by proposing Decoupled Prompt Tuning (DePT), a first framework tackling the BNT problem from a feature decoupling perspective. Specifically, through an in-depth analysis on the learned features of the base and new tasks, we observe that the BNT stems from a channel bias issue, i.e., the vast majority of feature channels are occupied by base-specific knowledge, resulting in the collapse oftask-shared knowledge important to new tasks. To address this, DePT decouples base-specific knowledge from feature channels into an isolated feature space during prompt tuning, so as to maximally preserve task-shared knowledge in the original feature space for achieving better zero-shot generalization on new tasks. DePT is orthogonal to existing prompt tuning methods, hence it can tackle the BNT problem for all of them. Extensive experiments on 11 datasets show the strong flexibility and effectiveness of DePT.

  [[PDF](https://arxiv.org/pdf/2309.07439)] [[arXiv](https://arxiv.org/abs/2309.07439)]

</ProjectCard>


## Awards & Honors

- 2024, **National Scholarship**, Ministry of Education of the People's Republic of China
- 2023, **Outstanding Graduate**, University of Electronic Science and Technology of China (UESTC)

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

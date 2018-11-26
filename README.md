# gci18.fossasia.org
FOSSASIA Google Code-In Website 2018
https://gci18.fossasia.org

This is the repository for FOSSASIA's website for Google Code-In 2018, we at FOSSASIA intend to develop it collaboratively during the course of this competition by participating students themselves. Fork the repository before making changes and make sure you read [FOSSASIA Best Practices](https://blog.fossasia.org/open-source-developer-guide-and-best-practices-at-fossasia/)

Read in **[German](https://github.com/Ritzing/gci18.fossasia.org/blob/master/translations/GermanReadme.md)**

## Communication

- Please join our **[mailing list](https://groups.google.com/forum/#!forum/fossasia)** to discuss questions regarding the project.

  > https://groups.google.com/forum/#!forum/fossasia

- Our chat channel is on **[Gitter](https://gitter.im/fossasia/gci16.fossasia.org)**

  > [gitter.im/fossasia/gci16.fossasia.org](https://gitter.im/fossasia/gci16.fossasia.org)

## Things you should know before contributing:
- All pull requests need to be associated to an issue.
- All PRs need to be assigned to the person working on it.
- If an issue cannot be completed in less than a day, it should be broken up into multiple issues.
- Make pull requests from your own forks (even if you have write rights to the repository, do not create new branches, develop on your own branches).
- State the actual change or enhancement in the commit message of PRs (do not just state “Fixes issue #123”).
- Add the issue number into the description (this helps to speed up reviews as reviewers can simply click to get more info in the issue itself).
- Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/).
- Match pull requests with issues and make sure your pull requests description contains GitHub’s special keyword references that automatically close the related issue when the pull request is merged. (More info at https://github.com/blog/1506-closing-issues-via-pull-requests).
- When you make very minor changes to a pull request of yours (like for example fixing a failing travis build or some small style corrections or minor changes requested by reviewers) make sure you squash your commits afterwards so that you don’t have an absurd number of commits for a very small fix (Learn how to squash at https://davidwalsh.name/squash-commits-git).
- Add a screenshot if you changed anything in the UI of a project. When you’re submitting a pull request for a UI-related issue, please add a screenshot of your change or a link to a deployment where it can be tested out along with your pull request. It makes it much easier for the reviewers and helps to speed up the process. You’ll also get reviews quicker.
- Add a link to your deployment of the project, where reviewers can check out what you have changed (especially for smaller changes this is very helpful as the reviewer might not even need to set up the system itself and test it. Again this speeds up the review process a lot).
- Always ensure CI and tests are successful.
- Help to resolve merge conflicts (especially if there are several PRs at the same time, merge conflicts are common. Help the reviewers and solve merge conflicts to speed up the process.).
- Merging Pull Requests should only happen if at least two contributors reviewed the PR and approved it.

## How to run locally?
- It is easy to run locally. Don't be afraid! :D
- If you have Git already installed, skip the step 3. If you have cloned your fork already skip steps 4 and 5. 
1. First of all you need to complete some requirements. Install them if you don't have things in [this documentation](https://jekyllrb.com/docs/installation/).
2. Open your terminal and install jekyll `gem install jekyll bundler`.
3. Download and install git on your pc.
4. Go to [gci18.fossasia.org site](https://github.com/fossasia/gci18.fossasia.org) make a fork if you haven't already.
5. Open Git Bash and clone your repository into your pc. `git clone https://github.com/<_your-name-here_>/gci18.fossasia.org`.
6. Go inside to your cloned repo, and open Git Bash.(If you have done 5th step do this `cd gci18.fossasia.org`).
7. Type `bundle install` to install dependencies.
8. Type `bundle exec jekyll serve`. 
9. You will see a server address. To view gci18.fossasia.org site, go to `localhost:4000` from your favourite browser.

- Now the work is done.

## How to add your Photo Nick to the website:
- Choose a photo(or representation like a "nick" image) and set the size to 240x240 px
- Upload your photo to the img/students folder, with an acceptable name :)
- Add yourself to the _data/students.yml file as shown below
```yaml
- name: Student's name
  github: Student's Github username
  image: Your image (or representation like a "nick" image) - the name must match the one you uploaded to the folder
```

## How to add a mentor to the website:
- Choose a current GCI mentor and seek permission before adding him/her
- Ask for a picture or take it from github and set the size to 240x240 px
- Upload the picture to the img/mentors folder - with a suitable name
-  Add the mentor to the _data/metors.yml file as shown below
```yaml
- name: Mentor's name
  github: Mentor's github link
  img: Mentor's img 
  
```
## How to add a New Project to the website
-  Choose a FOSSASIA project

- Ask for a picture or take it from github and set the size to 1366x566 px
- Upload the picture to the img folder - with a suitable name
- Add the project to the _data/orgprojects.yml file as shown below

```yaml
- title: Project name
  img: Project screenshot
  desc: Project description
  github: Project github link
  try: URL where project is hosted 
```
## How to add a language to the Thank you section:
- Choose a language(probably one you're familiar with)
- Pick the phrase "Thank you for your contributions" or "Thank you for contributing" and translate it
- Add the translation to the `var items = [];` in the js/thankyou.js file

## Available Gradients
- `gradient-pink-light` =  #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%
<img src="https://webgradients.com/public/webgradients_png/001%20Warm%20Flame.png"
     alt="Warm Flame"
     width = 100%
     height= 50px/>
- `gradient-pink` = #ff758c, #ff7eb3
<img src="https://webgradients.com/public/webgradients_png/080%20Passionate%20Bed.png"
     alt="Ripe Malinka"
     width= 100%
     height= 50px/>
- `gradient-cyan-light` = #84fab0 0%, #8fd3f4 100%
<img src="https://webgradients.com/public/webgradients_png/012%20Tempting%20Azure.png"
     alt="Tempting Azure"
     width = 100%
     height= 50px/>
- `gradient-cyan` = #43e97b 0%, #38f9d7 100%
<img src="https://webgradients.com/public/webgradients_png/020%20New%20Life.png"
     alt="New Life"
     width= 100%
     height= 50px/>
- `gradient-blue-light` = #a1c4fd 0%, #c2e9fb 100%
<img src="https://webgradients.com/public/webgradients_png/010%20Winter%20Neva.png"
     alt="Winter Neva"
     width= 100%
     height = 50px/>
- `gradient-blue` = #4facfe,#00f2fe
<img src="https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png"
     alt="Malibu Beach"
     width= 100%
     height = 50px />
- `gradient-multi-cool` =  #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%
<img src="https://webgradients.com/public/webgradients_png/152%20Sea%20Lord.png"
     alt="Sea Lord"
     width= 100%
     height = 100px />
- `gradient-multi-hot` = #FFE29F 0%, #FFA99F 48%, #FF719A 100%
<img src="https://webgradients.com/public/webgradients_png/158%20Angel%20Care.png"
     alt="Angel Care"
     width= 100%
     height = 100px />

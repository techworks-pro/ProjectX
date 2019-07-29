This project is a passion project for CUNY TechWorks.

Members: Sunil, Rinchen, Donghao.

## Available Scripts

In the project directory, you can run:

```bash
$ cd client
$ npm install
$ npm start
$ cd ..
$ cd server
$ npm install
$ nodemon server.js
```

### `Dependencies`

Folder:server

- express
- morgan
- nodemon
- mysql

Folder:client

- react
- react-dom
- react-scripts
- react-router-dom
- react-highlight-js
- axios

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Before you work on this project, please take a look at the instructional steps below.

`1.If you work on a new computer`<br>
**_Bash Terminal_**

```bash
git clone https://github.com/techworks-pro/ProjectX.git
cd ProjectX
npm install
code .
npm start # to run the local host live sever
```

`2.If you work on your own computer which has local repo.`<br>
**_Bash Terminal_**

```bash
(Update the local directory)
code .
git checkout master
git fetch
git pull
npm install
```

### How to create a new branch

```bash
git branch yourBranchName # create a new branch
git checkout yourBranchName # use your branch
```

`3.After you finish and test your branch, you want to make a pull request to Github master, make sure you are in the local branch.`<br>
**_Step 1: Bash Terminal_**

```bash
git checkout yourBranchName
git add .
git commit -m 'your commit'
git push origin youBranchName # or just git push, if you are on your branch
```

**_Step 2: Github Repo_**<br>

<ol>
<li>Click compare & pull request;</li>
<li>Click create pull request;</li>
<li>After pull request review,  click merge pull request;</li>
<li>Click confirm;</li>
</ol>

`4.If you and your contributors are working on different files, one of you finish and merge in the Github master, how could the others update their local master and their working branch?`

```bash
git fetch
git pull
```

`error: Your local changes to the following files would be overwritten by checkout: src/Components/index.js Please commit your changes or stash them before you switch branches.`

### How to handle this kind of the error. This error occurs when there are some changes in local file that has not been committed to GitHub and you want to checkout to your branch.

```bash
git checkout -f gh-pages
```

or

```bash
git reset --hard
git checkout gh-pages
```

### How to view the branches?

```bash
git branch # shows the locally available branches, doesn't show the hidden branches
git branch -a # shows the local as well as remote branches
git branch -r # shows only the remote branches
git checkout yourBanchName # to view the branches of your choice
```

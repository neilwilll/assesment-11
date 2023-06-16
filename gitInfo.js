/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition = "Git is a distributed version control system for tracking changes in source code during software development."


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition = "GitHub is a web-based platform for version control using git. It is commonly used for hosting and collaborating on software projects, allowing multiple developers to work on the same codebase at the same time, track changes and manage different versions of the code."


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition = "git init is a command in Git that initializes a new Git repository. It creates a new empty repository in the current directory, allowing you to start tracking changes and version control for your project.";



//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition = "The 'git clone' command is used to create a copy of a remote repository on your local machine, allowing you to work on the code locally and push changes back up to the remote repository."



//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition = "The 'git status' command is used to display the current status of the repository including the changes that have been made, but not yet committed. This command can help the user to identify what changes have been made to the repository, which files have been modified, and which files are staged for committing.";




//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE// Definition of git add
const gitAddDefinition = "Git add is a command that adds changes made to the files in your local repository to the staging area, preparing them for committing.";

// Code to add all files
const gitAddCode = "git add .";


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition = "git commit is a command in git that creates a snapshot of the changes made to the repository. It is a way to save and document the changes made in the repository, and provides a record of all changes made in the repository over time."

const gitCommitCode = "git commit -m 'initial commit'"




//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition = "Git push is a command used to upload local repository content to a remote repository.";

const gitPushCode = "git push <remote> <branch>";

Steps for github syncronizations:

1) install git-bash or powershell (command-line for git commands) https://github.com/PowerShell/PowerShell#get-powershell
 
2) create a folder and open command-line inside the folder

3) in command line :
                   -> git init ( initialize git inside folder )
                   -> git clone "https://github.com/Codrin89/EneredMay" ( cloning github repository on to computer and syncing remote )
                   -> git checkout -b BRANCH_NAME ( creates a branch for code versioning )
                   * after creating new files or modifying the existing ones 
                   -> git status ( check what is modified )
                   -> git add FILE_NAME ( adding files created/modified for uploading inside github )
                   -> git commit -m "MESSAGE" ( after adding files for upload put a message for the upload )
                   -> git push ( to upload files to github )

4) at the last step , "git push" the command-line should prompt for username and password , that can be avoided by setting email
                   -> git config --global user.email "EMAIL_ADDRESS"

5) after the initial setup , if we change something from another computer/device and want to syncronize the changes we use :
                   -> git pull ( which should syncronize the computer with the github repository )
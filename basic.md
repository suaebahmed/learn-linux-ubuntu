* **permision  change file for vscode:**

```sh
$ sudo chmod 777 /htdocs
```
* **Vim textEditor tutorial**
i => insert mode 
Esc => to commend mode 
: => to commend pass 

wq => write and quit 
q=> quit

j => to go bottom line
k => to go top line
h => to go left charactar
l => to go right charactar

shift + 4 => to go end line
p => paste line
d => delet line

* **Create file:**

```sh
$ touch file1.txt
$ touch file1.txt file2.txt file3.txt
$ echo "Some line" > file1.txt
```
* **Remove file.**

```sh
$ rm filename 
$ rm filename1 filename2 filename3
$ unlink filename 
# remove all .pdf extension included file
$ rm *.pdf
$ sudo rm filename

* $$ Use the rm with the -i option to confirm each file before deleting it:

rm -i filename(s)

* $$ You can also combine rm options. For example, to remove all .txt files in the current directory without a prompt in verbose mode, use the following command:

rm -fv *.txt

* $$ To remove non-empty directories and all the files within them, use the rm command with the-r (recursive) option:

rm -r dirname

If a directory or a file within the directory is write-protected, you will be prompted to confirm the deletion.

```

* **
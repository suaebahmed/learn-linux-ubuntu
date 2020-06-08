* **permision  change file for vscode:**

```sh
$ sudo chmod 777 /htdocs
# every read/wirte/execute -R recursively
$ sudo chmod 777 -R /opt/lampp/htdocs/php/admin/images
```
* **Vim textEditor tutorial**
    i => insert mode <br>
    Esc => to commend mode <br>
    : => to commend pass <br>

    wq => write and quit <br>
    q=> quit<br>

    j => to go bottom line<br>
    k => to go top line<br>
    h => to go left charactar<br>
    l => to go right charactar<br>

    shift + 4 => to go end line<br>
    p => paste line<br>
    d => delet line<br>

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

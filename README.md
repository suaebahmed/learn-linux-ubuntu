
* **Difference Between apt and apt-get Explained:**
- *super user do! (sudo)*
- *Advanced Packaging Tool (APT)*

There are various tools that interact with APT and allow you to install, remove and manage packages in Debian based Linux distributions. apt-get is one such command-line tool which is widely popular. Another popular tool is Aptitude with both GUI and command-line options.


It became common to see apt install package instead of the usual apt-get install package. Eventually, many other distributions followed Ubuntu’s footsteps and started to encourage users to use apt instead of apt-get.

* **Sorry,Ubuntu 20.04 has experienced an internal error**
*ExecutablePath:* 
/usr/libexec/tracker-miner-fs 
 
*solution:* 
sudo gedit /etc/default/apport




* **download and install visual studio code**:
``` sh
#  go to vscode website and download ubunto file
#  then go to downloads folder by terminal and run
$ sudo dpkg -i code_1.45.1-1589445302_amd64.deb
```
* **install node.js on ubuntu 20.04**:
*i don't know why i run them*
$ sudo apt update <br>
$ sudo apt upgrade <br>

```sh
$ sudo apt install nodejs npm
# cheking node and npm : $ node -v and $ npm -v
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ source ~/.profile 
# cheking nvm version : $ nvm --version
$ nvm ls-remote 
$ nvm install XX.xx.x
# cheking node: $ node -v
```
* **install git**:
```sh
$ sudo apt-get install git
```

* **install xampp**:
```sh
#  go to apache website and download ubunto file
$ ls
$ chmod +x XamppName.run
$ ls
$ sudo ./XamppName.run
# setup mannually --go to application and folder

# to run go $ cd /opt/lampp/
$ ls
$ sudo ./manager-linux-x64.run
```

* **web Development setup on Ubuntu 20.04** 
 **Install php environment:**
```sh
$ sudo apt-get install apache2
$ sudo apt-get install php libapache2-mod-php
# for vim text editor
$ sudo apt-get install vim
$ sudo vim index.php
i
# cd /var/www/html/ and $ ls -la
$ sudo gedit /etc/apache2/mods-available/dir.conf

# to restart server
$ sudo service apache2 restart

```

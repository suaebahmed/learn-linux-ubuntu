
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

* **Run fsck manually**
```sh
(initramfs) fsck /dev/sda3
# then ? y and y
```
* **busyBox v1.30.1**
```sh
# find out i would be: sda1,sda2,sda3,sda4,sda6
(initramfs) fsck.ext4 /dev/sda5  
```

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
* **install postman**:
```sh
$ sudo snap install postman
```
* **install kazam**:
```sh
$ sudo apt-get install kazam
```
* **install codeblocks**
```sh
$ sudo add-apt-repository ppa:damien-moore/codeblocks-stable
$ sudo apt-get update
$ sudo apt-get install codeblocks
```

* **install xampp**:
```sh
#  go to apache website and download ubunto file
$ ls
$ chmod +x sodu ./xampp-linux-x64-7.4.6-0-installer.run
$ ls
$ sudo sodu ./xampp-linux-x64-7.4.6-0-installer.run
# setup mannually --go to application and folder

# to run go $ cd /opt/lampp/
$ ls
$ sudo ./manager-linux-x64.run
#to uninstall xampp:
$ sudo ./uninstall
$ sudo rm –r /opt/lamp
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
* **laravel setup on ubuntu using Xampp**
```sh
$ sudo gedit /etc/environment
#PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/opt/lampp/bin/php"
$ sudo ln -s /opt/lampp/bin/php /usr/local/bin/php
$ sudo /opt/lampp/lampp start
$ sudo apt-get install curl
$ curl https://getcomposer.org/installer | php
#move the file to /usr..
$ sudo mv composer.phar /usr/local/bin/composer

#composer create-project --prefer-dist laravel/laravel blog
php artisan serve

```

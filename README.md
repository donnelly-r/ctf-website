# Capture the Flag application

## Usage:
This is a helper website which is intended to be used in conjunction with a Ubuntu virtual machine. This website will verify answers and give instructions to users on how to capture a given flag.

This website has been created as part of an undergraduate computer science dissertation.

## Prerequisites:
 - Installed Oracle VM VirutalBox: https://www.virtualbox.org/wiki/Downloads.
- Created VM Instance in VirtualBox Manager
- Installed Ubuntu on VM: https://ubuntu.com/download/desktop.
- Setup share folder between your machine and VM: https://www.youtube.com/watch?v=TtTtpPL0L8I&lc=UgyywbhYX6tZkHB7JkZ4AaABAg.9n-i-QFaz2P9oakCX9iQ_4.
- Installed Pip & required packages (flask), Python on your machine.
- Installed Pip & required packages (rsa, virtualbox-guest-utils, virtualbox-dkms), as well as Zip on virtual machine.

## Getting started:
- Clone this repository, navigate to the the root directory of the project and run 'python ./website.py' to host the website locally.
- Copy zip archive (found in static\assets\vm_archive\archive.zip) of required VM contents to share folder on VM.
- Unzip archive in the Documents directory.
- Navigate to http://127.0.0.1:5000/index to begin completing the CTF challenge!

  

## Flag Outline:
*  **Flag 1.** Introducing commands: Can you change directories from root to '~/Documents/Flag1'?
*  **Flag 2.** Introducing command line arguments: Can you use ls -al to list a hidden file?
*  **Flag 3.** Introducing commands: Can you use '| grep' to filter information?
*  **Flag 4.** Cryptography: Can you solve a Caesar cipher?
*  **Flag 5.** Cryptography: Can you reverse the MD5 hashes?
*  **Flag 6.** Programming: Can you inspect a python file to find the correct credentials?
*  **Flag 7.** Web: Can you use inspect element to alter html attributes?
*  **Flag 8.** Stenography: Introducing sitemaps and information hiding.

## License:
[MIT](https://choosealicense.com/licenses/mit/)

To build/run find a suitable electron release from [Castlabs list)[https://github.com/castlabs/electron-releases/releases] take note of the version (i.e. v16.2.2+wvcus) and install it with the command:
```
npm install "https://github.com/castlabs/electron-releases#v16.2.2+wvcus" --save-dev
```
To run the project in-place:
npm start

To build the .deb and .rpm file you will need to download the correct Castlab release in zip format for Linux (i.e. electron-v16.2.2+wvcus-linux-x64.zip) from [Castlab]( https://github.com/castlabs/electron-releases/releases) and place it in the zip subdirectory. Then run
npm run make

In principle to make macosx and windows binary, they have to be signed as follow, for Linux it is not necessary, but I'm leaving the instructions here to keep track:
```
# install signing software
python3 -m pip install --upgrade castlabs-evs
# create free account
python3 -m castlabs_evs.account signup
# relogin if necessary
python3 -m castlabs_evs.account reauth .
# sign package
python3 -m castlabs_evs.vmp sign-pkg  .
```



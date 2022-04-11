To build
find a suitable electron release from https://github.com/castlabs/electron-releases/releases
download the zip file and place it in the zip/ directory, take not of the version and install
it with the command:

npm install "https://github.com/castlabs/electron-releases#v16.2.2+wvcus" --save-dev
#npm install

# build the .deb and .rpm file
npm run-script make

# in principle to make macosx and windows binary, they have to be signed as follow:

# to sign binary:
# install signing software
python3 -m pip install --upgrade castlabs-evs
# create free account
python3 -m castlabs_evs.account signup
# relogin if necessary
python3 -m castlabs_evs.account reauth .
# sign package
python3 -m castlabs_evs.vmp sign-pkg  .




To build
npm install "https://github.com/castlabs/electron-releases#v16.2.2+wvcus" --save-dev
#npm install
npm run-script make

# to sign binary:
python3 -m pip install --upgrade castlabs-evs
python3 -m castlabs_evs.account signup
python3 -m castlabs_evs.account reauth .
python3 -m castlabs_evs.vmp sign-pkg  .



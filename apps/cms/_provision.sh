sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

sudo apt-get install -y nodejs
sudo npm install -g pm2 yarn

sudo ufw enable
sudo ufw allow 3001
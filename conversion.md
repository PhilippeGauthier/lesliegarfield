sudo rm -R statamic/ Statamic-Globals-master.zip
sudo cp -R lesliegarfield.com/statamic/assets/ staging.lesliegarfield.com/wwwroot/
sudo cp -R lesliegarfield.com/statamic/_content staging.lesliegarfield.com/wwwroot/
sudo cp -R lesliegarfield.com/statamic/_config/users/ staging.lesliegarfield.com/wwwroot/_config/
sudo cp -R lesliegarfield.com/statamic/_forms staging.lesliegarfield.com/wwwroot/
cd lesliegarfield.com/wwwroot
sudo chmod -R 777 _config/users _content assets _forms _cache _logs
do-jag:
	curl -L https://omnitruck.chef.io/install.sh | sudo bash
	cp -r chef/cookbooks cookbooks
	cat chef/cookbooks/baseconfig/recipes/default.rb | sed s/vagrant/jag/g > cookbooks/baseconfig/recipes/default.rb
	sudo chef-client --local-mode --runlist 'recipe[baseconfig::default]'

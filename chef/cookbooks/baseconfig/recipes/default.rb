execute 'apt_update' do
  command 'apt-get update'
end

package 'git'
execute 'git_name' do
  command 'git config --global user.name "Jagrajan Bhullar"'
end
execute 'git_email' do
  command 'git config --global user.email jag@jagrajan.com'
end

package 'vim'
directory "/home/vagrant/.vim" do
  owner "vagrant"
  group "vagrant"
  mode "0755"
  action :create
end
directory "/home/vagrant/.vim/bundle" do
  owner "vagrant"
  group "vagrant"
  mode "0755"
  action :create
end
directory "/home/vagrant/.vim/bundle/Vundle.vim" do
  owner "vagrant"
  group "vagrant"
  mode "0755"
  action :create
end
git "/home/vagrant/.vim/bundle/Vundle.vim" do
  repository "git://github.com/VundleVim/Vundle.vim.git"
  action :sync
  user "vagrant"
  group "vagrant"
end
cookbook_file 'vimrc' do
  path '/home/vagrant/.vimrc'
end

package 'postgresql'

execute 'create_database' do
  command 'echo "CREATE DATABASE portfolio; CREATE USER vagrant; GRANT ALL PRIVILEGES ON DATABASE portfolio TO vagrant;" | sudo -u postgres psql'
end

package 'curl'

execute 'install_nodejs' do
  command 'curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -'
end

execute 'import_yarn_key' do
  command 'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -'
end
execute 'add_yarn_repo' do
  command 'echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list'
end

execute 'apt update'
package 'nodejs'
package 'yarn'

execute 'install_npm_packages' do
  command 'yarn install'
  cwd '/home/vagrant/project'
end

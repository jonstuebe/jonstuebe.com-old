def jekyll(opts="", path="")
  sh "rm -rf html"
  sh path + "jekyll " + opts
end

desc "Build site using Jekyll"
task :build do
  jekyll("build")
end

desc "Build & Watch Site using Jekyll"
task :watch do
	jekyll("build --watch")
end

namespace :deploy do

	desc "Deploy to Live"
	task :live => :build do
		sh "rsync --compress --recursive --checksum --delete _site/ jonstuebe.com@s139302.gridserver.com:/nfs/c09/h04/mnt/139302/domains/jonstuebe.com/html/"
	end

end
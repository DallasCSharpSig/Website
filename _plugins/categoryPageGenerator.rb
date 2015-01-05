module Jekyll

  class CategoryPage < Page
    def initialize(site, base, dir, category)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category_index.html')

      meetings = site.collections['meetings'].docs.map { |doc| doc.data }

      groups = meetings.group_by { 
      	|meeting| Date.strptime(meeting['date']).year 
      }

      groups = groups.sort_by{ |x| x}.reverse

      groups.each do |group|
      		group[1] = group[1].sort_by{ |x| x['date']}.reverse
      	end

      self.data['groupedMeetings'] = groups

    end
  end

  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'category_index'
        dir = site.config['category_dir'] || 'categories'
        site.categories.each_key do |category|
          site.pages << CategoryPage.new(site, site.source, File.join(dir, category), category)
        end
      end
    end
  end

end
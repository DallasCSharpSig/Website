module Jekyll

  class MeetingsPage < Page
    def initialize(site, base, dir, name)
      @site = site
      @base = base
      @dir = dir
      @name = name

      self.process(@name)
      
      self.read_yaml(File.join(base, '_layouts'), 'meetings.html')

      meetings = site.collections['meetings'].docs.map { |doc| doc.data }

      groups = meetings.group_by { |meeting| Date.strptime(meeting['date']).year }

      groups = groups.sort_by{ |x| x }.reverse

      groups.each { |group| group[1] = group[1].sort_by{ |x| x['date']}.reverse }

      self.data['groupedMeetings'] = groups

    end
  end

  class MeetingsGenerator < Generator
    safe true

    def generate(site)
      if site.layouts.key? 'meetings'
          site.pages <<  MeetingsPage.new(site, site.source, 'meetings', 'index.html')
      end
    end

  end

end
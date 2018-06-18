import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_urls = ['https://www.coursera.org/about/partners']

    def parse(self, response):
        filecsv = open("coursera-scrapy.csv", 'a')
        counter = 0
        uniName = ''

        for uni in response.css('h1.display-4-text'):
            yield {'universityName': uni.css('h1 ::text').extract_first()}
            uniName = uni.css('h1 ::text').extract_first()

        for a in response.css('div.headline-1-text'):
            yield {'course': a.css(' ::text').extract_first()}
            course = {'course': a.css(' ::text').extract_first()}
            counter = counter + 1
        filecsv.write('"'+str(uniName)+'",'+str(counter)+'\n')

        for next_page in response.css('div.rc-PartnerBox > a'):
            yield response.follow(next_page, self.parse)

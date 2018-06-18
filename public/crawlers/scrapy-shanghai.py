import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_urls = ['http://www.shanghairanking.com/ARWU2017.html']

    def parse(self, response):
        filecsv = open("shanghai.csv", 'w')
        for uni in response.css('td.left'):
            yield {'universityName': uni.css('a ::text').extract_first()}
            filecsv.write((uni.css('a ::text').extract_first())+"\n")
        filecsv.close()

import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    #start_urls = ['file:///Users/leirelitwin/Desktop/TFG-MOOCS-SERVER/OTHERS/mooc-research-public/trunk/papers/emooc2017/code/edx.html']
    start_urls = ["https://www.edx.org/schools-partners"]
    def parse(self, response):
        filecsv = open("edx-scrapy.csv", 'a')
        print ("DOCUMENT")
        print (str(response.text))
        for uni in response.xpath("//div[@class='title']"):
            print('HOLAAAAAAAAAAAAAA')
            yield {'universityName': uni.css(' ::text').extract_first()}
            filecsv.write((uni.css(' ::text').extract_first())+"\n")
        filecsv.close()

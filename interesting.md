---
layout: page
---
<html>
	<!--interesting-->
  	<!--display thse randomly l8a -->
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossorigin="anonymous" />
		<title>interesting</title>
	</head>
	<body>
    <a href="/"><i><sup>return home</sup></i></a>
		<h1>interesting</h1>
    <div></div>
    <ul style="font-size: large">
            <li><a href="https://www.npr.org/sections/health-shots/2015/01/09/376084137/trapped-in-his-body-for-12-years-a-man-breaks-free" time_added="1600111348" tags="">Trapped In His Body For 12 Years, A Man Breaks Free : Shots - Health News </a></li>
            <li><a href="https://www.oregonlive.com/news/2020/08/usps-removes-mailboxes-in-portland-and-eugene-cites-declining-mail-volume.html" time_added="1597437226" tags="">USPS removes mailboxes in Portland and Eugene, cites ‘declining mail volume</a></li>
            <li><a href="https://onezero.medium.com/an-unelected-monarch-is-shaping-our-public-life-his-name-is-mark-zuckerberg-d7c571bd42d2" time_added="1597436791" tags="">An Unelected Monarch Is Shaping Our Public Life. His Name Is Mark Zuckerber</a></li>
            <li><a href="https://gekk.info/articles/adhd.html" time_added="1579843948" tags="">ADHD | Gekk</a></li>
            <li><a href="https://www.scmp.com/news/china/article/3047394/chinese-expert-who-came-down-wuhan-coronavirus-after-saying-it-was" time_added="1579841689" tags="">Chinese expert who came down with Wuhan coronavirus after saying it was con</a></li>
            <li><a href="https://www.haaretz.com/israel-news/business/economy-finance/.premium-futurist-sees-the-end-of-the-world-as-we-know-it-for-average-person-1.8227728" time_added="1575894179" tags="interesting">Futurist sees ‘the end of the world as we know it for average person’ - Eco</a></li>
            <li><a href="https://www.theguardian.com/environment/2019/feb/10/plummeting-insect-numbers-threaten-collapse-of-nature?" time_added="1549835779" tags="">Plummeting insect numbers &#039;threaten collapse of nature&#039; | Environment | The</a></li>
            <li><a href="https://motherboard.vice.com/en_us/article/a3bg9g/joshua-tree-national-park-could-take-200-to-300-years-to-recover-from-the-government-shutdown" time_added="1549474058" tags="">Joshua Tree National Park Could Take ‘200 to 300 Years’ to Recover From the</a></li>
            <li><a href="https://motherboard.vice.com/en_us/article/a3be34/climate-change-alter-color-half-earths-oceans-2100-phytoplankton" time_added="1549362357" tags="">Climate Change Will Alter the Color of Half of Earth’s Oceans by 2100 - Mot</a></li>
            
            {% for data in site.data.links %}
              <li>
                <a href="{{ data.url }}" time_added="" tags=""> {{ data.title }} </a>
              </li>
            {% endfor %}

    </ul>
</body>
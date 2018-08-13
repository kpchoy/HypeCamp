# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
u1 = User.create(email: 'Dwight@gmail.com', first_name: "Dwight", 
  last_name: "Schrute", password: "123456")
u2 = User.create(email: 'Jim@gmail.com', first_name: "Jim", 
  last_name: "Halpert", password: "123456")
u3 = User.create(email: 'Pam@gmail.com', first_name: "Pam",
  last_name: "Beasly", password: "123456")
u4 = User.create(email: 'Michael@gmail.com', first_name: "Michael", 
  last_name: "Scott", password: "123456")
u5 = User.create(email: 'Stanley@gmail.com', first_name: "Stanley",
  last_name: "Hudson", password: "123456")


Campsite.delete_all
c1 = Campsite.create(owner_id: u1.id, title: "Sanctuary Of The Oaks Site #10", 
  description: "This is a single tent campsite.
  Pitch you tent on this 12' X 15' tent pad on the hill off by itself. Cook your meals in our communal outdoor kitchen equipped with sink (cold water only), plenty of counter space, propane stove, earth oven and our fire-brick table. Picnic tables and fire pit in immediate area. ",
  daily_rate: 25, state: "California", lat: 37.8651, lng: -119.5483)

c2 = Campsite.create(owner_id: u3.id, title: "Wild Tender Tipi Ocean View", 
  description: "Very peaceful and private immersion into the beautiful wild lands of the Coast. Amazing! Views! of Ocean and Coastal mountains. Great smells, lots of wildlife and star gazing!",
  daily_rate: 100, state: "California", lat: 37.2017, lng: -122.4018)

c3 = Campsite.create(owner_id: u3.id, title: "Glamping @ Big Mesa Farmstead", 
  description: "Big Mesa Farmstead is a 10-acre homestead close to epic beaches and wide open nature. We're surrounded by preserved agricultural property and Pt. Reyes National Seashore, so you'll really feel like you've escaped the city. ",
  daily_rate: 175, state: "California", lat: 37.9130, lng: -122.6996)

c4 = Campsite.create(owner_id: u4.id, title: "Treehouse Magic Grove", 
  description: "This treehouse is In a lovely eucalyptus grove, nestled securely 30 feet up in a multi-trunked 110 ft. tree. Deck, artistically appointed cabin, cozy queen bed, luxury linens. Peacefully rural yet just 6 minutes to historic downtown Petaluma with great restaurants and shopping.",
  daily_rate: 194, state: "California", lat: 38.2061, lng: -122.6829)

c5 = Campsite.create(owner_id: u1.id, title: "Free Grazing Land", 
  description: "Pitch a tent in a grass field where the birds chirp and wild deer, owls, turkeys , bunnies come and go as they please. . . . were 5 miles from town with an easy fun drive . The grass grows high in spring and becomes a wonderful brown by late summer. . . . my wife and i will be on and near the camping sites .",
  daily_rate: 25, state: "California", lat: 37.7497, lng: -122.7779)

c6 = Campsite.create(owner_id: u1.id, title: "FollyFootFrolic", 
  description: "Equal parts working farm, renovation in progress, and Youth Hostel, FollyFoot's mission is to create a fun, relaxed environment where diversity and community are celebrated!! More social than escapist, our unique property is an experience you'll not find anywhere else. ",
  daily_rate: 60, state: "California", lat: 36.44, lng: -121.6657)

c7 = Campsite.create(owner_id: u5.id, title: "Bumps & Bruzas Riverfront", 
  description: "Very simple property on the Carbon River about 800ft of river front. Couple of fire rings, nothing fancy yet! We have one campsite with a private fire ring, which is first come first serve. We also have a large community firepit thats open to everyone at all times. None of the spots are numbered, just find a place you like. Just a great place to relax and unplug",
  daily_rate: 27, state: "Washington", lat: 47.1088, lng: -122.1192)

c8 = Campsite.create(owner_id: u4.id, title: "Running Deer TIPI near Bryce Canyon", 
  description: "You’ll love staying here because of the spectacular 360˚ views on a private 13-acre property. Conveniently and easily accessible directly off Hwy 89. My place is good for couples and solo adventurers. Enjoy spectacular views of Red Rock Cliffs and the Sevier River from your hilltop private TIPI. ",
  daily_rate: 70, state: "Utah", lat: 37.6839, lng: -112.4104)

c9 = Campsite.create(owner_id: u1.id, title: "Winter wonderland near skiing", 
  description: "During the winter our back field is not accessible. We are in Teton Valley, Idaho, with an elevation of 6,500 ft, and we get heavy snow. Our parking lot is cleared of snow and this has plenty of parking for RVs. We are a 12-mile drive from Grand Targhee, a world-renowned ski resort. ",
  daily_rate: 25, state: "Idaho", lat: 43.7542, lng: -111.1066)






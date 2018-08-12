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
  daily_rate: 25, state: "California", lat: 37.8651, lng: -119.5483,
  picture_url: "nice pic")
c2 = Campsite.create(owner_id: u3.id, title: "Wild Tender Tipi Ocean View", 
  description: "Very peaceful and private immersion into the beautiful wild lands of the Coast. Amazing! Views! of Ocean and Coastal mountains. Great smells, lots of wildlife and star gazing!",
  daily_rate: 100, state: "California", lat: 37.2017, lng: -122.4018,
  picture_url: "nice pic2")
c3 = Campsite.create(owner_id: u3.id, title: "Glamping @ Big Mesa Farmstead", 
  description: "Big Mesa Farmstead is a 10-acre homestead close to epic beaches and wide open nature. We're surrounded by preserved agricultural property and Pt. Reyes National Seashore, so you'll really feel like you've escaped the city. ",
  daily_rate: 175, state: "California", lat: 37.9130, lng: -122.6996,
  picture_url: "nice pic3")
c4 = Campsite.create(owner_id: u4.id, title: "Treehouse Magic Grove", 
  description: "This treehouse is In a lovely eucalyptus grove, nestled securely 30 feet up in a multi-trunked 110 ft. tree. Deck, artistically appointed cabin, cozy queen bed, luxury linens. Peacefully rural yet just 6 minutes to historic downtown Petaluma with great restaurants and shopping.",
  daily_rate: 194, state: "California", lat: 38.2061, lng: -122.6829,
  picture_url: "nice pic4")
c5 = Campsite.create(owner_id: u1.id, title: "Free Grazing Land", 
  description: "Pitch a tent in a grass field where the birds chirp and wild deer, owls, turkeys , bunnies come and go as they please. . . . were 5 miles from town with an easy fun drive . The grass grows high in spring and becomes a wonderful brown by late summer. . . . my wife and i will be on and near the camping sites .",
  daily_rate: 25, state: "California", lat: 37.7497, lng: -122.7779,
  picture_url: "nice pic5")
c6 = Campsite.create(owner_id: u1.id, title: "Vista History Garden Yurt", 
  description: "Summer, summer. . . not the hot spot you might imagine yet at the Preserve.  Crazy clouds commonly contribute to pretty magnificent sunsets from our hilltop vista point. And, the coolish weather makes that campfire at the visitor center feel sooo great. ",
  daily_rate: 125, state: "California", lat: 38.0815, lng: -122.2620,
  picture_url: "nice pic6")

c7 = Campsite.create(owner_id: u5.id, title: "Yurt Glampin in the Forrest", 
  description: "We are one hour from San Francisco, and ninety minutes from Monterey. Rural setting but 10 minutes to town, ideal for telecommuting also with reliable cell phone reception. Award winning Los Gatos schools.",
  daily_rate: 135, state: "California", lat: 38.0815, lng: -122.2620,
  picture_url: "nice pic7")


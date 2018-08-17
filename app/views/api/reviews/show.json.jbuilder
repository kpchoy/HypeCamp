json.review do 

  json.extract! '/api/reviews/review', :id, :body, :author_id, :campsite_id, :rating
   
end 
# require 'JSON'

class Bench < ActiveRecord::Base
  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }

  # My test bounds that center on the NE part of the city
  # {"northEast"=> {"lat"=>"37.803904", "lng"=>"-122.473249"}, "southWest"=> {"lat"=>"37.759645", "lng"=>"-122.387676"} } 

  lats = [bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f]
  lngs = [bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f]

  benches = Bench.where("lat BETWEEN :lat_min AND :lat_max", {
    lat_min: lats.min,
    lat_max: lats.max})
    .where("lng BETWEEN :lng_min AND :lng_max", { 
      lng_min: lngs.min,
      lng_max: lngs.max})
  end
end

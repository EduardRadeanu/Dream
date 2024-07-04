const router = require("express").Router();
const Listing = require("../models/Listing");

router.delete('/:listingId', async (req, res) => {
    try {
      const { listingId } = req.params; // Obținerea id-ului din parametrii rutei
      console.log(`Attempting to delete listing with ID: ${listingId}`);
      
      // Căutarea și ștergerea anunțului din baza de date
      const deletedListing = await Listing.findByIdAndDelete(listingId);
  
      if (!deletedListing) {
        console.log("Listing not found!");
        return res.status(404).json({ message: "Listing not found!" });
      }
  
      console.log("Listing deleted successfully!");

      
      res.status(200).json({ message: "Listing deleted successfully!" });
    } catch (err) {
      console.error("Failed to delete listing", err);
      res.status(500).json({ message: "Failed to delete listing", error: err.message });
    }
  });
module.exports = router;
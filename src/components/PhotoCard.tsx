import { profile } from '../data/profile'
import { publicAssetUrl } from '../utils/publicAssetUrl'

// The About page photo. To use a real photo, save it as
// public/images/photo.jpg (same file name) and it appears here.
function PhotoCard() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card">
      <img
        src={publicAssetUrl(profile.photo)}
        alt={`Portrait of ${profile.name}`}
        className="aspect-[3/4] w-full object-cover"
      />
    </div>
  )
}

export default PhotoCard

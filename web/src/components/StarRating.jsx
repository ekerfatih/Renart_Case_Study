const Star = ({filled = false}) => (
    <svg
        className={`w-6 h-6 ${filled ? 'text-yellow-gold' : 'text-gray-300'} fill-current`}
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1
      1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37
      2.448a1 1 0 00-.364 1.118l1.286 3.96c.3.921-.755
      1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176
      0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.286-3.96a1
      1 0 00-.364-1.118L2.064 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1
      1 0 00.95-.69l1.286-3.96z"
            clipRule="evenodd"
        />
    </svg>
)

const HalfStar = () => (
    <div className="relative w-6 h-6">
        <Star filled={false}/> {/* gray bg */}
        <div className="absolute inset-0 w-1/2 overflow-hidden">
            <Star filled={true}/>
        </div>
    </div>
)

export default function StarRating({rating, max = 5}) {
    const full = Math.floor(rating)
    const half = rating - full >= 0.5
    const empty = max - full - (half ? 1 : 0)

    return (
        <div className="flex items-center space-x-1">
            {Array(full).fill().map((_, i) => <Star key={i} filled/>)}
            {half && <HalfStar/>}
            {Array(empty).fill().map((_, i) => <Star key={i}/>)}
        </div>
    )
}

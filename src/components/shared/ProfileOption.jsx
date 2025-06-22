// components/shared/ProfileOption.jsx
export default function ProfileOption({ icon, label, onClick, rightIcon }) {
  return (
    <div
      className="flex items-center justify-between p-2.5 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-2 text-black ">
        {icon}
        <span className="text-sm font-inter font-medium">{label}</span>
      </div>
      {rightIcon && <span className="text-gray-700">{rightIcon}</span>}
    </div>
  )
}

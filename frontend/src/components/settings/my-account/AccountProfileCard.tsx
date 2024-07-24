import UserBanner from './UserBanner'
import UserEditOptions from './UserEditOptions'
import UserInfo from './UserInfo'

export default function AccountProfileCard() {
	return (
		<div className="w-[660px] bg-[#1e1f22] pb-4 rounded-lg">
			<UserBanner />
			<UserInfo />
			<UserEditOptions />
		</div>
	)
}

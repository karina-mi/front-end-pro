import './User.css'

function User (props) {
	return (
		<div className='user'>
			<p>Имя: {props.name}</p>
      <p>Возраст: {props.age}</p>
      <p>Пол: {props.sex}</p>
		</div>
	)
}
export default User
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function LoginGoogle() {
    return (
        <button className="bg-white shadow text-center w-full py-4 flex gap-4 justify-center">
        <FontAwesomeIcon icon={faGoogle} className="w-6 " />
        <span>Sign in with Google</span>
      </button>
    );
}
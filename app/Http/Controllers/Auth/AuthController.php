<?php

  namespace App\Http\Controllers\Auth;

  use App\Http\Controllers\Controller;
  use App\Models\User;
  use Illuminate\Http\Request;
  use Illuminate\Support\Facades\Auth;
  use Illuminate\Support\Facades\Hash;
  use Laravel\Socialite\Facades\Socialite;

  class AuthController extends Controller
  {
    public function login_page()
    {
      return inertia('Auth/Login');
    }

    public function register_page()
    {
//      return inertia('Auth/Register');
    }

    public function register(Request $request)
    {
      $request->validate([
        'username' => 'required|string|max:255|unique:users',
        'name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:8',
      ]);

      $user = User::create([
        'username' => $request->username,
        'name' => $request->name,
        'email' => $request->email,
        'password' => Hash::make($request->password),
      ]);

      Auth::login($user);

      return redirect()->intended('/');
    }

    // Fungsi untuk login
    public function login(Request $request)
    {
      $request->validate([
        'email' => 'required|email',
        'password' => 'required|string',
      ]);

      $credentials = $request->only('email', 'password');

      if (Auth::attempt($credentials)) {
        $request->session()->regenerate();
        return redirect()->intended('/');
      }

      return back()->withErrors([
        'email' => 'Email atau password salah.',
      ])->onlyInput('email');
    }

    // Fungsi untuk redirect ke Google
    public function redirectToGoogle()
    {
      return Socialite::driver('google')->redirect();
    }

    // Fungsi untuk handle callback dari Google
    public function handleGoogleCallback()
    {
      $googleUser = Socialite::driver('google')->stateless()->user();
      $user = User::where('google_id', $googleUser->id)->first();

      if ($user) {
        Auth::login($user);
      } else {
        $user = User::create([
          'username' => $googleUser->email, // Atau sesuaikan dengan kebutuhan
          'name' => $googleUser->name,
          'email' => $googleUser->email,
          'google_id' => $googleUser->id,
          'google_token' => $googleUser->token,
        ]);

        Auth::login($user);
      }

      return redirect()->route('home');
    }

    public function logout(Request $request)
    {
      Auth::logout();

      $request->session()->invalidate();

      $request->session()->regenerateToken();

      return redirect('/login'); // Redirect ke halaman login atau halaman lain setelah logout
    }
  }

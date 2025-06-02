
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Enhanced cyberpunk theme colors with more ethereal tones
				cyberpunk: {
					DEFAULT: '#0a0812',
					foreground: '#f8fafc',
					primary: '#ff2a6d',
					secondary: '#05d9e8',
					accent: '#d946ef',
					muted: '#1e1b2e',
					border: '#2a2438'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'divine-glow': {
					'0%, 100%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px theme(colors.cyberpunk.secondary), 0 0 40px theme(colors.cyberpunk.secondary), 0 0 60px theme(colors.cyberpunk.secondary)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: '0 0 30px theme(colors.cyberpunk.secondary), 0 0 60px theme(colors.cyberpunk.secondary), 0 0 90px theme(colors.cyberpunk.secondary)' 
					}
				},
				'divine-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-15px) rotate(1deg)' },
					'66%': { transform: 'translateY(-8px) rotate(-1deg)' }
				},
				'ethereal-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						filter: 'drop-shadow(0 0 10px theme(colors.cyberpunk.primary)) drop-shadow(0 0 20px theme(colors.cyberpunk.primary)) drop-shadow(0 0 30px theme(colors.cyberpunk.primary))'
					},
					'20%, 24%, 55%': { 
						filter: 'drop-shadow(0 0 5px theme(colors.cyberpunk.primary))'
					}
				},
				'divine-shimmer': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)' },
					'100%': { transform: 'translateX(200%) skewX(-15deg)' }
				},
				'holy-pulse': {
					'0%, 100%': { 
						transform: 'scale(1)',
						filter: 'brightness(1) saturate(1)'
					},
					'50%': { 
						transform: 'scale(1.05)',
						filter: 'brightness(1.2) saturate(1.3)'
					}
				},
				'cosmic-drift': {
					'0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
					'25%': { transform: 'translateX(20px) translateY(-10px) rotate(90deg)' },
					'50%': { transform: 'translateX(0) translateY(-20px) rotate(180deg)' },
					'75%': { transform: 'translateX(-20px) translateY(-10px) rotate(270deg)' },
					'100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' }
				},
				'celestial-dance': {
					'0%, 100%': { 
						transform: 'scale(1) rotate(0deg)',
						opacity: '0.7'
					},
					'25%': { 
						transform: 'scale(1.1) rotate(90deg)',
						opacity: '0.9'
					},
					'50%': { 
						transform: 'scale(0.9) rotate(180deg)',
						opacity: '1'
					},
					'75%': { 
						transform: 'scale(1.05) rotate(270deg)',
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'divine-glow': 'divine-glow 3s infinite',
				'divine-float': 'divine-float 8s ease-in-out infinite',
				'ethereal-flicker': 'ethereal-flicker 4s linear infinite',
				'divine-shimmer': 'divine-shimmer 2s ease-in-out infinite',
				'holy-pulse': 'holy-pulse 4s ease-in-out infinite',
				'cosmic-drift': 'cosmic-drift 20s linear infinite',
				'celestial-dance': 'celestial-dance 12s ease-in-out infinite'
			},
			backgroundImage: {
				'cyberpunk-grid': 'linear-gradient(rgba(5, 217, 232, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 217, 232, 0.15) 1px, transparent 1px)',
				'hero-pattern': 'radial-gradient(circle at top right, rgba(255, 42, 109, 0.2), transparent 70%), radial-gradient(circle at bottom left, rgba(5, 217, 232, 0.2), transparent 70%)',
				'divine-gradient': 'linear-gradient(135deg, rgba(255, 42, 109, 0.3) 0%, rgba(5, 217, 232, 0.3) 50%, rgba(217, 70, 239, 0.3) 100%)'
			},
			boxShadow: {
				'neon-primary': '0 0 20px theme(colors.cyberpunk.primary), 0 0 40px theme(colors.cyberpunk.primary), 0 0 60px theme(colors.cyberpunk.primary)',
				'neon-secondary': '0 0 20px theme(colors.cyberpunk.secondary), 0 0 40px theme(colors.cyberpunk.secondary), 0 0 60px theme(colors.cyberpunk.secondary)',
				'neon-accent': '0 0 20px theme(colors.cyberpunk.accent), 0 0 40px theme(colors.cyberpunk.accent), 0 0 60px theme(colors.cyberpunk.accent)',
				'divine': '0 0 30px rgba(255, 42, 109, 0.4), 0 0 60px rgba(5, 217, 232, 0.3), 0 0 90px rgba(217, 70, 239, 0.2)'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

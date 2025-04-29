
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
				// Cyberpunk theme colors
				cyberpunk: {
					DEFAULT: '#0f0e17',
					foreground: '#fffffe',
					primary: '#ff2a6d',
					secondary: '#05d9e8',
					accent: '#d946ef',
					muted: '#2e2c3a',
					border: '#1a1f2c'
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
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 5px theme(colors.cyberpunk.secondary), 0 0 10px theme(colors.cyberpunk.secondary)'
					},
					'50%': { 
						opacity: '0.7',
						boxShadow: '0 0 20px theme(colors.cyberpunk.secondary), 0 0 30px theme(colors.cyberpunk.secondary)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'neon-flicker': {
					'0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
						filter: 'drop-shadow(0 0 5px theme(colors.cyberpunk.primary)) drop-shadow(0 0 15px theme(colors.cyberpunk.primary))'
					},
					'20%, 24%, 55%': { 
						filter: 'none'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'neon-flicker': 'neon-flicker 3s linear infinite'
			},
			backgroundImage: {
				'cyberpunk-grid': 'linear-gradient(rgba(5, 217, 232, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 217, 232, 0.1) 1px, transparent 1px)',
				'hero-pattern': 'radial-gradient(circle at top right, rgba(255, 42, 109, 0.15), transparent 70%), radial-gradient(circle at bottom left, rgba(5, 217, 232, 0.15), transparent 70%)'
			},
			boxShadow: {
				'neon-primary': '0 0 5px theme(colors.cyberpunk.primary), 0 0 10px theme(colors.cyberpunk.primary)',
				'neon-secondary': '0 0 5px theme(colors.cyberpunk.secondary), 0 0 10px theme(colors.cyberpunk.secondary)',
				'neon-accent': '0 0 5px theme(colors.cyberpunk.accent), 0 0 10px theme(colors.cyberpunk.accent)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

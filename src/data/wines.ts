type WineItem = {
	name: string;
	grapes?: string;
	bottle?: string;
	glass?: string;
};

type WineSubsection = {
	subtitle: string;
	items: WineItem[];
};

export type WineSection = {
	title: string;
	items?: WineItem[];
	subsections?: WineSubsection[];
};

export const wineSections: WineSection[] = [
	{
		title: "Vino joven",
		subsections: [
			{
				subtitle: "Tinto",
				items: [
					{ name: "Paco García 6", grapes: "Tempranillo", bottle: "15€", glass: "2,30€" },
					{ name: "Manael", grapes: "Tempranillo, Viura", bottle: "14,50€", glass: "2,30€" },
				],
			},
			{
				subtitle: "Rosado",
				items: [
					{ name: "Emergente", grapes: "Garnacha", bottle: "15€", glass: "2,30€" },
					{ name: "Bohemian Rhapsody", grapes: "Tempranillo", bottle: "17€" },
					{ name: "Suañé Rosado (reserva)", grapes: "Viura, Garnacha tinta, Sauvignon blanc", bottle: "32,50€" },
				],
			},
			{
				subtitle: "Blanco",
				items: [
					{ name: "Altanza", grapes: "Sauvignon blanc", bottle: "15€" },
					{ name: "Manael", grapes: "Viura", bottle: "14,50€", glass: "2,30€" },
					{ name: "Blanco roto", grapes: "Semi dulce", bottle: "14€", glass: "2,30€" },
					{ name: "Faustino Art collection", grapes: "Viura y Chardonay", bottle: "15€", glass: "2,30€" },
					{ name: "Dominio de Nobleza", grapes: "Tempranillo", bottle: "17€", glass: "2,50€" },
				],
			},
		],
	},
	{
		title: "Blanco y monovarietales",
		items: [
			{ name: "Luis Cañas viñas viejas", grapes: "Viura, Malvasía", bottle: "21€" },
			{ name: "Campillo fermentado en barrica", grapes: "Viura y Chardonay", bottle: "16€" },
			{ name: "Amaren fermentado en barrica", grapes: "Viura, Malvasía", bottle: "25€" },
			{ name: "Valenciso fermentado en barrica", grapes: "Viura, Garnacha blanca", bottle: "27€" },
			{ name: "Victor Ausejo Parcela 333", grapes: "Garnacha blanca", bottle: "26€" },
			{ name: "Faustino I gran reserva", grapes: "Viura, Chardonay", bottle: "33€" },
			{ name: "Clipeo", grapes: "Maturana blanca", bottle: "24€" },
			{ name: "Canene fermentado sobre lías", grapes: "Viura", bottle: "17,50€" },
			{ name: "Suañe Reserva", grapes: "Viura, Sauvignon blanc", bottle: "32,50€" },
		],
	},
	{
		title: "Crianzas",
		items: [
			{ name: "Rioja Bordón", grapes: "Tempranillo", bottle: "18€" },
			{ name: "Ondarre 7 parcelas", grapes: "Tempranillo, Mazuelo", bottle: "19,50€", glass: "3,10€" },
			{ name: "LAN D-12", grapes: "Tempranillo", bottle: "19,50€" },
			{ name: "Campillo", grapes: "Tempranillo", bottle: "19,50€", glass: "3,10€" },
			{
				name: "Luis Cañas",
				grapes: "Tempranillo, Garnacha, Graciano, Viura, Malvasía",
				bottle: "19,50€",
				glass: "3,10€",
			},
			{ name: "Paco García", grapes: "Tempranillo", bottle: "19€" },
			{ name: "Tobelos", grapes: "Tempranillo", bottle: "20€" },
			{ name: "Sierra Cantabria", grapes: "Tempranillo", bottle: "21,50€" },
			{ name: "La Montesa", grapes: "Garnacha, otras", bottle: "22,50€" },
			{ name: "La Merce", grapes: "Tempranillo", bottle: "20,50€" },
		],
	},
	{
		title: "Vinos de Autor y monovarietales",
		items: [
			{
				name: "Caran",
				grapes: "Tempranillo, Graciano, Mazuelo, Maturana tinta",
				bottle: "19,50€",
			},
			{
				name: "Selvanevada",
				grapes: "Tempranillo, Graciano, Garnacha, Mazuelo",
				bottle: "20€",
			},
			{ name: "8 Caecus", grapes: "Tempranillo", bottle: "22€" },
			{
				name: "Jesús Madrazo Num. IV",
				grapes: "Tempranillo, Garnacha, Maturana, Graciano",
				bottle: "24,50€",
			},
			{ name: "Villota Tinto", grapes: "Tempranillo, Graciano", bottle: "27€" },
			{ name: "Ángeles de Amaren", grapes: "Tempranillo, Graciano", bottle: "29€" },
			{ name: "Tihom", grapes: "Mazuelo, Graciano, Garnacha", bottle: "32€" },
			{ name: "Sierra Cantabria Cuvee", bottle: "33€" },
			{ name: "Peña el gato granito", grapes: "Garnacha", bottle: "24€" },
			{ name: "Senderos de Ukan", grapes: "Tempranillo, Viura", bottle: "23,50€" },
			{ name: "Monte Gatún", grapes: "Tempranillo, Garnacha, Mazuelo", bottle: "20,50€" },
			{ name: "Viña Lanciano", grapes: "Tempranillo, Graciano, Mazuelo", bottle: "28,50€" },
			{ name: "La Piconada", grapes: "Maturana tinta", bottle: "19€" },
			{ name: "Victor Ausejo", grapes: "Mazuelo", bottle: "26,50€" },
			{ name: "Campillo 57", grapes: "Tempranillo, Graciano", bottle: "30€" },
			{ name: "Finca la Canoca", grapes: "Tempranillo", bottle: "26,50€" },
		],
	},
	{
		title: "Viñedo singular",
		subsections: [
			{
				subtitle: "Tinto",
				items: [
					{
						name: "Finca El Cristo de Samaniego",
						grapes: "Tempranillo, Garnacha, Viura, Malvasía",
						bottle: "45€",
					},
					{
						name: "El sueño de Amado",
						grapes: "Tempranillo, Graciano, Viura",
						bottle: "22,50€",
					},
					{ name: "El guardián de la viña", grapes: "Tempranillo", bottle: "49€" },
					{ name: "Finca El Palacio", grapes: "Tempranillo, Graciano, Viura", bottle: "59€" },
					{ name: "Cerro La Isa", grapes: "Garnacha", bottle: "56€" },
				],
			},
			{
				subtitle: "Blanco",
				items: [
					{ name: "Los Quiñones", grapes: "Viura", bottle: "48€" },
					{
						name: "Cerro La Isa",
						grapes: "Garnacha blanca, Malvasía, Viura, Turruntes, Calagraño",
						bottle: "56€",
					},
					{ name: "Valdelascarretas", grapes: "Viura", bottle: "31€" },
				],
			},
		],
	},
	{
		title: "Reservas",
		items: [
			{
				name: "Marqués de Vargas",
				grapes: "Tempranillo, Mazuelo, Garnacha, otras",
				bottle: "30€",
			},
			{ name: "Valenciso", grapes: "Tempranillo", bottle: "33€" },
			{
				name: "Marqués de Murrieta",
				grapes: "Tempranillo, Graciano, Mazuelo, Garnacha",
				bottle: "33€",
			},
			{
				name: "Viña Tondonia",
				grapes: "Tempranillo, Mazuelo, Garnacha, Graciano",
				bottle: "43€",
			},
			{ name: "Roda I", grapes: "Tempranillo, Graciano", bottle: "64€" },
			{ name: "Campillo", grapes: "Tempranillo", bottle: "23€" },
		],
	},
	{
		title: "Ribera del Duero",
		items: [
			{ name: "Corimbo", grapes: "Tempranillo", bottle: "31€" },
			{ name: "Tierras de Cair", grapes: "Tempranillo", bottle: "48€" },
			{ name: "Monteabellon 5M", grapes: "Tempranillo", bottle: "23€" },
		],
	},
	{
		title: "Rueda (verdejos)",
		items: [
			{ name: "Monteabellón", bottle: "14€", glass: "2,30€" },
			{ name: "Marqués de Riscal", bottle: "18€" },
		],
	},
	{
		title: "Albariños",
		items: [
			{ name: "Pazo de Señorans", bottle: "22€" },
			{ name: "Santiago Ruiz", bottle: "21€" },
		],
	},
	{
		title: "Priorato",
		items: [
			{
				name: "Camins",
				grapes: "Garnacha, Cariñena, Cabernet Sauvignon, Syrah",
				bottle: "33€",
			},
		],
	},
	{
		title: "Bierzo",
		items: [{ name: "Petalos", grapes: "Mencía, otras", bottle: "24€" }],
	},
	{
		title: "Cavas y Champagne",
		items: [
			{ name: "Ondarre Brut Nature", bottle: "18€" },
			{ name: "Juvé Camps Brut Nature", bottle: "32€" },
			{ name: "Gosset Brut grande reserve (champagne)", bottle: "78€" },
		],
	},
	{
		title: "Pedro Ximenez",
		items: [{ name: "Lustau", glass: "4€" }],
	},
	{
		title: "Oporto",
		items: [{ name: "Sandeman 10", glass: "5€" }],
	},
];

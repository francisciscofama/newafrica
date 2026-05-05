import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Camera, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

import img1 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0004.jpg";
import img2 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0005.jpg";
import img3 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0006.jpg";
import img4 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0008.jpg";
import img5 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0009.jpg";
import img6 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0010.jpg";
import img7 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0011.jpg";
import img8 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0012.jpg";
import img9 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0013.jpg";
import img10 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0014.jpg";
import img11 from "../assets/Colégio Colina do Sol/IMG-20260429-WA0015.jpg";
import img12 from "../assets/Fotos adicionais/CEO.jpeg";
import vid1 from "../assets/Colégio Colina do Sol/VID-20260429-WA0002.mp4";
import vid2 from "../assets/Colégio Colina do Sol/VID-20260429-WA0003.mp4";
import vid3 from "../assets/Colégio Colina do Sol/VID-20260429-WA0007.mp4";
import vid4 from "../assets/Colégio Colina do Sol/VID-20260430-WA0001.mp4";
import vid5 from "../assets/Colégio Colina do Sol/VID-20260430-WA0002.mp4";
import vid6 from "../assets/Colégio Colina do Sol/VID-20260430-WA0003.mp4";

const eventHighlights = [
	{
		icon: CalendarDays,
		title: "Momentos especiais",
		description: "Uma selecção dos principais momentos vividos no Colégio Colina do Sol.",
	},
	{
		icon: Camera,
		title: "Galeria completa",
		description: "Fotografias que mostram a energia, participação e alegria dos alunos.",
	},
	{
		icon: PlayCircle,
		title: "Vídeos do evento",
		description: "Clipes curtos com os melhores registos do ambiente e das actividades.",
	},
];

const mediaItems = [
	{ type: "image", src: img1, label: "Foto", title: "Entrada do evento", span: "md:col-span-2 md:row-span-2" },
	{ type: "video", src: vid1, label: "Vídeo", title: "Abrindo o evento", span: "md:col-span-1" },
	{ type: "image", src: img12, label: "Foto", title: "CEO e Vice", span: "md:col-span-2 md:row-span-2" },
	{ type: "image", src: img2, label: "Foto", title: "Recepção", span: "md:col-span-1" },
	{ type: "image", src: img3, label: "Foto", title: "Participação dos alunos", span: "md:col-span-1" },
	{ type: "video", src: vid2, label: "Vídeo", title: "Registo em vídeo", span: "md:col-span-1 md:row-span-2" },
	{ type: "image", src: img4, label: "Foto", title: "Cenário do colégio", span: "md:col-span-1" },
	{ type: "image", src: img5, label: "Foto", title: "Interacção e alegria", span: "md:col-span-1" },
	{ type: "video", src: vid3, label: "Vídeo", title: "Momento de destaque", span: "md:col-span-2" },
	{ type: "image", src: img6, label: "Foto", title: "Detalhes do espaço", span: "md:col-span-1" },
	{ type: "image", src: img7, label: "Foto", title: "Sorrisos e celebração", span: "md:col-span-1" },
	{ type: "video", src: vid4, label: "Vídeo", title: "Durante a actividade", span: "md:col-span-1" },
	{ type: "image", src: img8, label: "Foto", title: "Comunidade escolar", span: "md:col-span-1" },
	{ type: "image", src: img9, label: "Foto", title: "Ambiente festivo", span: "md:col-span-1" },
	{ type: "video", src: vid5, label: "Vídeo", title: "Ponto alto do dia", span: "md:col-span-2 md:row-span-2" },
	{ type: "image", src: img10, label: "Foto", title: "Mais um instante", span: "md:col-span-1" },
	{ type: "image", src: img11, label: "Foto", title: "Fecho da galeria", span: "md:col-span-1" },
	{ type: "video", src: vid6, label: "Vídeo", title: "Clausura do evento", span: "md:col-span-2" },
];

type MediaItem = (typeof mediaItems)[number];

const EventsSection = () => {
	const [galleryOpen, setGalleryOpen] = useState(false);
	const [viewerItem, setViewerItem] = useState<MediaItem | null>(null);
	const previewItems = mediaItems.slice(0, 5);

	const openViewer = (item: MediaItem) => {
		setViewerItem(item);
	};

	return (
		<section id="eventos" className="py-16 bg-muted relative overflow-hidden">
			<div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
			<div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" />

			<div className="container mx-auto px-4 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center max-w-3xl mx-auto mb-10"
				>
					<span className="text-sm font-semibold text-secondary uppercase tracking-widest">Eventos</span>
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
						Vivências e <span className="text-primary">memórias</span> do Colégio Colina do Sol
					</h2>
					<p className="text-muted-foreground text-lg">
						Veja alguns dos melhores momentos registados em imagens e vídeos do nosso evento.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-4"
					>
						<div className="bg-card shadow-card p-6 border border-border/40">
							<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary mb-4">
								<Sparkles className="w-4 h-4" />
								Destaques
							</span>
							<h3 className="text-xl font-bold text-foreground mb-3">Uma galeria feita para reviver o momento</h3>
							<p className="text-muted-foreground leading-relaxed">
								Reunimos fotografias e vídeos para mostrar a energia do evento, a participação da comunidade escolar e os detalhes que tornaram o dia especial.
							</p>
						</div>

						<div className="grid sm:grid-cols-3 gap-3">
							{eventHighlights.map((item) => (
								<div key={item.title} className="bg-card shadow-card p-4 border border-border/40">
									<div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-3">
										<item.icon className="w-5 h-5 text-primary" />
									</div>
									<h4 className="font-semibold text-foreground mb-1.5">{item.title}</h4>
									<p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
								</div>
							))}
						</div>

						<div className="flex flex-wrap items-center gap-3 pt-1">
							<Button className="rounded-none" onClick={() => setGalleryOpen(true)}>
								Ver toda a galeria
							</Button>
							<p className="text-sm text-muted-foreground">Abra a galeria completa com imagens e vídeos.</p>
						</div>
					</motion.div>

					<div className="grid gap-4 grid-cols-2 auto-rows-[150px] md:auto-rows-[180px]">
						{previewItems.map((item, index) => (
							<motion.button
								type="button"
								key={`${item.title}-${index}`}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.04 }}
								onClick={() => openViewer(item)}
								className={`group relative overflow-hidden bg-card shadow-card border border-border/30 text-left ${index === 0 ? "col-span-2 row-span-2" : ""}`}
							>
								{item.type === "image" ? (
									<img
										src={item.src}
										alt={item.title}
										className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
								) : (
									<video
										src={item.src}
										className="absolute inset-0 h-full w-full object-cover"
										muted
										playsInline
										preload="metadata"
									/>
								)}

								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
								<div className="absolute left-0 right-0 bottom-0 p-4 flex items-end justify-between gap-3">
									<div>
										<span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
											{item.label}
										</span>
										<h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
									</div>
									<div className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm">
										{item.type === "image" ? <Camera className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
									</div>
								</div>
							</motion.button>
						))}
					</div>
				</div>

				<Dialog open={galleryOpen} onOpenChange={setGalleryOpen}>
					<DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] overflow-hidden p-0 gap-0">
						<div className="p-6 border-b border-border/40">
							<DialogHeader>
								<DialogTitle className="text-2xl font-bold">Galeria completa do evento</DialogTitle>
								<DialogDescription>
									Clique em qualquer imagem ou vídeo para abrir a visualização individual.
								</DialogDescription>
							</DialogHeader>
						</div>
						<div className="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-92px)]">
							<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px]">
								{mediaItems.map((item, index) => (
									<button
										type="button"
										key={`${item.title}-gallery-${index}`}
										onClick={() => openViewer(item)}
										className={`group relative overflow-hidden bg-card shadow-card border border-border/30 text-left ${item.span}`}
									>
										{item.type === "image" ? (
											<img
												src={item.src}
												alt={item.title}
												className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
												loading="lazy"
											/>
										) : (
											<video
												src={item.src}
												className="absolute inset-0 h-full w-full object-cover"
												muted
												playsInline
												preload="metadata"
											/>
										)}

										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
										<div className="absolute left-0 right-0 bottom-0 p-4 flex items-end justify-between gap-3">
											<div>
												<span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
													{item.label}
												</span>
												<h4 className="mt-2 text-lg font-semibold text-white">{item.title}</h4>
											</div>
											<div className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm">
												{item.type === "image" ? <Camera className="w-4 h-4" /> : <PlayCircle className="w-4 h-4" />}
											</div>
										</div>
									</button>
								))}
							</div>
						</div>
					</DialogContent>
				</Dialog>

				<Dialog open={viewerItem !== null} onOpenChange={(open) => !open && setViewerItem(null)}>
					<DialogContent className="max-w-5xl w-[95vw] max-h-[92vh] overflow-hidden p-0 gap-0">
						{viewerItem && (
							<>
								<div className="p-6 border-b border-border/40">
									<DialogHeader>
										<DialogTitle className="text-2xl font-bold">{viewerItem.title}</DialogTitle>
										<DialogDescription>
											{viewerItem.type === "image" ? "Visualização individual da imagem." : "Visualização individual do vídeo."}
										</DialogDescription>
									</DialogHeader>
								</div>
								<div className="bg-black flex items-center justify-center p-3 md:p-6 min-h-[50vh] max-h-[calc(92vh-92px)]">
									{viewerItem.type === "image" ? (
										<img
											src={viewerItem.src}
											alt={viewerItem.title}
											className="max-h-[calc(92vh-140px)] w-auto max-w-full object-contain rounded-sm shadow-2xl"
										/>
									) : (
										<video
											src={viewerItem.src}
											className="max-h-[calc(92vh-140px)] w-auto max-w-full rounded-sm shadow-2xl"
											controls
											playsInline
											preload="metadata"
										/>
									)}
								</div>
							</>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
};

export default EventsSection;

export class Event {
/*
  private Long id;

	@Column(name="name", nullable=false)
	private String name;

	@Column(name="description")
	private String description;

	@Column(name="date", nullable=false)
	private Date date;

	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="user_id", nullable=false)
	private User creator;

	@Column(name="closed", nullable=false)
	private Boolean closed;
*/

  constructor(
    public id: string,
    public name: string,
    public description: string,
    public date: string
  ) {}
}


namespace Keepr.Repositories;

public class KeepsRepository
{
  private readonly IDbConnection _db;

  public KeepsRepository(IDbConnection db)
  {
    _db = db;
  }

  internal Keep CreateKeep(Keep keepData)
  {
    string sql = @"
      INSERT INTO
      keeps(name, description, img, creatorId)
      VALUES(@Name, @Description, @Img, @CreatorId);

      SELECT
      kee.*,
      acc.*
      FROM keeps kee
      JOIN accounts acc ON acc.id = kee.creatorId
      WHERE kee.id = LAST_INSERT_ID();";
    Keep keep = _db.Query<Keep, Profile, Keep>(sql, KeepBuilder, keepData).FirstOrDefault();
    return keep;
  }

  private Keep KeepBuilder(Keep keep, Profile profile)
  {
    keep.Creator = profile;
    return keep;
  }
}